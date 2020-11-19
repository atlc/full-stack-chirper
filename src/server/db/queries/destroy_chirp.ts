import { Query } from '..';

const destroy_chirp = async (id: string) => Query('DELETE from Chirps where id = ?', [id]);

export default destroy_chirp;