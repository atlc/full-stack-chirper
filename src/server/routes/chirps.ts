import * as express from 'express';
import db from '../db';

const router = express.Router();
const app = express();
app.use(express.json());

// Use Joi & Celebrate for true full-stack with auth for validating requests
// https://www.npmjs.com/package/celebrate#example-usage

router.get('/:id?', async (req, res) => {
    try {
        const dto = req.params;
        const id = dto.id;
        if (!!id) {
            const chirp = await db.Chirps.single(id);
            res.json(chirp);
        } else {
            const chirps = await db.Chirps.all();
            res.json(chirps);
        }
    } catch(e) {
        console.log(e);
        res.status(500).send('A server error has occurred.');
    }    
});

router.post('/', async (req, res) => {
    try {
        const dto = req.body;
        const userId: string = dto.userId;
        const content: string = dto.content;
        const location: string = dto.location;
        const sqlRes  = await db.Chirps.create(userId, content, location) 
        res.json(sqlRes);
    } catch(e) {
        console.log(e);
        res.status(500).send('A server error has occurred.')
    }
});


router.put('/:id', async (req, res) => {
    try {
        const dtoParams = req.params;
        const dtoBody = req.body;
        const id = dtoParams.id;
        const content: string = dtoBody.content;
        const sqlRes = await db.Chirps.update(id, content);
        res.json(sqlRes);
    } catch(e) {
        console.log(e);
        res.status(500).send('A server error has occurred.');
    }    
});

router.delete('/:id', async (req, res) => {
    try {
        const dto = req.params;
        const id = dto.id;
        const sqlRes = await db.Chirps.destroy(id);
        res.json(sqlRes);
    } catch(e) {
        console.log(e);
        res.status(500).send('A server error has occurred.');
    }    
});


export default router;