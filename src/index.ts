import express, { response } from 'express';
import router from './routes/index'
import images from './routes/api/images';

const app = express();
const port = 3000;

// route handler for home page
app.get('/', router);
app.use('/api', images);


// start the express server
app.listen(port, () =>{
    console.log(`I am listening on port ${port}`);
    
})

export default app;