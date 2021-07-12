import express from 'express';
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response): void =>{
    res.send('This is the main route');
});

export default router;
