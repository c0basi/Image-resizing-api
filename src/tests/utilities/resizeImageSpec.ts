import supertest from "supertest";
import resizeImage from "../../utilities/resizeImage";

describe('Checks out the resize image function', ()=>{
    const filename = 'fjord';
    const incorrectFilename = 'ford';
    const width = 200;
    const height = 300
    it('Tests that the function is resolved with no exceptions', async() =>{
        //const response = await resizeImage(filename, width, height);
        //expect(async function() {await resizeImage(filename, width, height)}).toThrow();;
        await expectAsync(resizeImage(filename, width, height)).toBeResolved();
    });
    it('Tests that the function does not get resolved ', async() =>{
        await expectAsync(resizeImage(incorrectFilename, width, height)).not.toBeResolved();
    })
})