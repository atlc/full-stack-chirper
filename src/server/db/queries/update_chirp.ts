import { Query } from '../index';

const update_chirp = async (id: string, content: string) => Query('UPDATE Chirps SET ? where ?', [{content}, {id}]);

export default update_chirp;