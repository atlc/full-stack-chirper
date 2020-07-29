import * as express from 'express';
import chirpsStore from '../chirpstore';

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id: number = +req.params.id;
    id ? res.json(chirpsStore.GetChirp(id)) : res.send(chirpsStore.GetChirps());
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id: number = +req.params.id;
    let text = req.body;
    id ? res.json(chirpsStore.UpdateChirp(id, text)) : res.sendStatus(404);
});

router.delete('/:id?', (req, res) => {
    let id: number = +req.params.id;
    id ? chirpsStore.DeleteChirp(id) : res.sendStatus(404);
});


export default router;



// Add DTO written at per router request
// Add res.json responses per request