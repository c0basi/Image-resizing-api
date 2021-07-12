import express, { response } from 'express';
import router from './routes/index'

const app = express();
const port = 3000;

// route handler for home page
app.get('/', router)


// start the express server
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
    
})