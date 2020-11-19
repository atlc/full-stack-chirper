import { Query } from '../index';

const create_chirp = async (userId: string, content: string, location: string) => Query('INSERT into Chirps SET ?', { userId, content, location });

export default create_chirp;