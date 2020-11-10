import * as express from 'express';

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id: number = +req.params.id;
    res.send('hey');
    // (id || id === 0) ? res.json(chirpsStore.GetChirp(id)).sendStatus(200) : res.send(chirpsStore.GetChirps()).sendStatus(200);
});

router.post('/', (req, res) => {
    let postDTO = {...req.body};
    let createdAt: number = Date.now();
    // chirpsStore.CreateChirp({createdAt, ...postDTO});
    res.send('Posted Chirp!').sendStatus(201);
});

router.put('/:id?', (req, res) => {
    let id: number = +req.params.id;
    let putDTO = {...req.body};
    let updatedAt: number = Date.now();
    if (id || id === 0) {
        // chirpsStore.UpdateChirp(id, {updatedAt, ...putDTO});
        res.send('Updated Chirp!').sendStatus(200);
    } else {
        res.send('Could not find chirp with that id.').sendStatus(404);
    }
});

router.delete('/:id?', (req, res) => {
    let id: number = +req.params.id;
    if (id || id === 0) {
        // chirpsStore.DeleteChirp(id);
        res.send('Destroyed chirp!').sendStatus(200);
    } else {
        res.sendStatus(404).send('Chirp not located.');
    }
});


export default router;



// Add DTO written at per router request
// Add res.json responses per requesroot