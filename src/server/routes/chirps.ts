import * as express from 'express';
import db from '../db';

const router = express.Router();
const app = express();
app.use(express.json());

router.get('/:id?', async (req, res) => {
    try {
        let id: number = +req.params.id;
        id ? res.json(await db.Chirps.chirp_by_id(id)) : res.json(await db.Chirps.all());
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});

router.post('/', async (req, res) => {
    try {
        let userId: number = +req.body.userId;
        let content: string = req.body.content;
        let location: string = req.body.location;
        res.json(await db.Chirps.new_chirp(userId, content, location));
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }
});


router.put('/:id?', async (req, res) => {
    try {
        let id: number = +req.params.id;
        let content: string = req.body.content;
        id ? res.json(await db.Chirps.update_chirp(id, content)) : res.sendStatus(404);
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});

router.delete('/:id?', async (req, res) => {
    try {
        let id: number = +req.params.id;
        id ? res.json(await db.Chirps.delete_chirp(id)) : res.sendStatus(404);
    } catch(e) {
        console.log(e);
        res.send('A server error has occurred.').sendStatus(500);
    }    
});


export default router;