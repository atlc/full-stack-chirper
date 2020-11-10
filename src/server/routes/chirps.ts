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
        res.send('Uh oh, we made a fucky-wucky').sendStatus(500);
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
        res.send('Uh oh, we made a fucky-wucky').sendStatus(500);
    }
});


// router.put('/:id?', (req, res) => {
//     let id: number = +req.params.id;
//     let putDTO = {...req.body};
//     let updatedAt: number = Date.now();
//     if (id || id === 0) {
//         // chirpsStore.UpdateChirp(id, {updatedAt, ...putDTO});
//         res.send('Updated Chirp!').sendStatus(200);
//     } else {
//         res.send('Could not find chirp with that id.').sendStatus(404);
//     }
// });

// router.delete('/:id?', (req, res) => {
//     let id: number = +req.params.id;
//     if (id || id === 0) {
//         // chirpsStore.DeleteChirp(id);
//         res.send('Destroyed chirp!').sendStatus(200);
//     } else {
//         res.sendStatus(404).send('Chirp not located.');
//     }
// });


export default router;