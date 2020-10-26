import * as fs from 'fs';
import * as path from 'path';
let chirps = { nextid: 0 };

const chirpFile = path.join(__dirname, './chirps.json');

if(fs.existsSync(chirpFile)) {
    chirps = JSON.parse(fs.readFileSync(chirpFile).toString());
}

let getChirps = () => {
    return Object.assign({}, chirps);
}

let getChirp = (id: number) => {
    return Object.assign({}, chirps[id]);
}

let createChirp = <T>(chirp: T) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = <T>(id: number, chirp: T) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = (id: number) => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync(chirpFile, JSON.stringify(chirps));
};

const ChirpStoreExports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}

export default ChirpStoreExports;