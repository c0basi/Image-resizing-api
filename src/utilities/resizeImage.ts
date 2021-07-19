import sharp from 'sharp';
import config from '../config';

const resizeImage = async (
    filename: string,
    width: number, 
    height: number
): Promise<void> =>{
    const imagePath = `${config.assets}/static/images/${filename}.jpg`
    const outdir = `${config.assets}/changedImages/${filename}${width}-${height}.jpg`
    try{
        await sharp(imagePath)
        .rotate()
        .resize(width, height)
        .toFile(outdir)

    }
    catch(err){
        throw new Error(`Could not process the image. Error: ${err}`)
    }
}

export default resizeImage;