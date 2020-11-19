import { Query } from '../index';

const all = async () => Query('SELECT * from Chirps');
const create = async (userId: string, content: string, location: string) => Query('INSERT into Chirps SET ?', { userId, content, location });
const destroy = async (id: string) => Query('DELETE from Chirps where id = ?', [id]);
const single = async (id: string) => Query('SELECT * from Chirps where id = ?', [id]);
const update = async (id: string, content: string) => Query('UPDATE Chirps SET ? where ?', [{content}, {id}]);

export default {
    all,
    create,
    destroy,
    single,
    update
};