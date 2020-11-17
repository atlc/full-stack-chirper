import { Query } from '../';

const all = async () => Query('SELECT * from Chirps');
const chirp_by_id = async (id: string) => Query('SELECT * from Chirps where id = ?', [id]);
const new_chirp = async (userId: string, content: string, location: string) => Query('INSERT into Chirps SET ?', { userId, content, location });
const update_chirp = async (id: string, content: string) => Query('UPDATE Chirps SET ? where ?', [{content}, {id}]);
const delete_chirp = async (id: string) => Query('DELETE from Chirps where id = ?', [id]);

/* Convert naming conventions to be aligned with CRUD verbs */


export default {
    all,
    chirp_by_id,
    new_chirp,
    update_chirp,
    delete_chirp
}