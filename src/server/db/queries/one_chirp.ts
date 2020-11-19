import { Query } from '../index';

const one_chirp = async (id: string) => Query('SELECT * from Chirps where id = ?', [id]);

export default one_chirp;