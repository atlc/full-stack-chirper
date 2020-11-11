import * as express from 'express';
import db from '../db';

const router = express.Router();
const app = express();
app.use(express.json());

router.get('/:id?', async (req, res) => {
    try {
        const dto = req.params;
        const id: number = +dto.id;
        id ? res.json(await db.Chirps.chirp_by_id(id)) : res.json(await db.Chirps.all());
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});

router.post('/', async (req, res) => {
    try {
        const dto = req.body;
        const userId: number = +dto.userId;
        const content: string = dto.content;
        const location: string = dto.location;
        res.json(await db.Chirps.new_chirp(userId, content, location));
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }
});


router.put('/:id?', async (req, res) => {
    try {
        const dtoParams = req.params;
        const dtoBody = req.body;
        const id: number = +dtoParams.id;
        const content: string = dtoBody.content;
        id ? res.json(await db.Chirps.update_chirp(id, content)) : res.sendStatus(404);
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});

router.delete('/:id?', async (req, res) => {
    try {
        const dto = req.params;
        const id: number = +dto.id;
        id ? res.json(await db.Chirps.delete_chirp(id)) : res.sendStatus(404);
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});


export default router;