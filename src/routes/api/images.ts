// this will be responsible for checking if the image exists and then sending the modifies stuff

import express from 'express';
import fileExist from '../../utilities/FileCreated';
import resizeImage from '../../utilities/resizeImage';
import config from '../../config';
const images = express.Router();


images.get('/', async(req: express.Request, res: express.Response): Promise<void> =>{
    const file = req.query.filename as string;
    const pathToImage = `${config.assets}/static/images/${req.query.filename}.jpg`;
    const outdir = `${config.assets}/changedImages/${req.query.filename}${req.query.width}-${req.query.height}.jpg` as string ;

    try{
        const width = parseInt((req.query.width as string));
        const height = parseInt((req.query.height as string));;
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



export default images;

