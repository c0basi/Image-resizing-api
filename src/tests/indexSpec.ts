//import { request } from "express";

import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe('Test for the api endpoints', ()=>{
    it('Tests for the / endpoint', async () =>{
        const response = await request.get('/');
        expect(response.status).toBe(200)
    });
    it('Tests for an incorrect endpoint', async() =>{
        const response = await request.get('/api?filename=lord&width=200&height=300');
        expect(response.text).toEqual('The image entered does not exist, please enter a correct filename')
    });
    it('Tests for a valid filename and displays an image', async() =>{
        const response = await request.get('/api?filename=fjord&width=200&height=300');
        expect(response.ok).toEqual(true);
    })
});