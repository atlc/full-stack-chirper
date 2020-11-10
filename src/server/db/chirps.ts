import { Query } from './index';

const all = async () => Query('SELECT * from Chirps');
const chirp_by_id = async (id: number) => Query('SELECT * from Chirps where id = ?', [id]);
const new_chirp = async (userId: number, content: string, location: string) => Query('INSERT into Chirps (userid, content, location) VALUES (?, ?, ?)', [userId, content, location]);

export default {
    all,
    chirp_by_id,
    new_chirp
}