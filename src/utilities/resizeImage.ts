import sharp from 'sharp';

const resizeImage = async (
    filename: string,
    width: number, 
    height: number
): Promise<void> =>{
    const imagePath = `../../assets/static/images/${filename}.jpg`
    const outdir = `./assets/changedImages/${filename}${width}X${height}`
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