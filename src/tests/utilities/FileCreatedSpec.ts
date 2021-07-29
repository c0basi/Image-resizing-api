import supertest from "supertest";
import fileExist from "../../utilities/FileCreated";

describe('Test for correct image paths', ()=>{
    const imageExists = './assets/static/images/icelandwaterfall.jpg'; 
    const imageNotExists = './assets/static/images/wate.jpg';
    it('Tests if the path specified exists', async() =>{
        const response = await fileExist(imageExists);
        expect(response).toBeTruthy();
    });
    it('Tests for an incorrect path', async() =>{
        const response = await fileExist(imageNotExists);
        expect(response).toBeFalsy();
    })

})