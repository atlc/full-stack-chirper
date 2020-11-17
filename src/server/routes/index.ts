import * as express from 'express';
import chirpsRouter from './chirps';

let router = express.Router();

// Router files read synchronously, passing ins omething likle this 
// allows injecting middlewares
// router.route('*').get(winston('silly'))

router.use('/chirps', chirpsRouter);

export default router;

