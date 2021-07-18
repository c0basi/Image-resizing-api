// this will be responsible for checking if the image exists and then sending the modifies stuff

import express from 'express';
import fileExist from '../../utilities/FileCreated';
import resizeImage from '../../utilities/resizeImage';
import config from '../../config';
const images = express.Router();


images.get('/', async(req: express.Request, res: express.Response): Promise<void> =>{
    const file = req.query.filename as string;
    const pathToImage = `${config.assets}/statc/images/${req.query.filename}`;
    const outdir = `${config.assets}/changesImages/${req.query.filename}${req.query.width}-${req.query.height}` as string;

    try{
        const width = (req.query.width as unknown) as number;
        const height = (req.query.height as unknown) as number;

        const outdirExists = await fileExist(outdir);
        const imageExists = await fileExist(pathToImage);

        if (!imageExists){
            res.send('The image entered does not exist, please enter a valid image')
        }

        else if(!outdirExists){
            await resizeImage(file,width,height);
            res.sendFile(outdir);
        }
        else{
            res.sendFile(outdir);
        }
    }
    catch(err){
        console.log(`Error getting image. Error ${err}`);
        

    }
    
})


