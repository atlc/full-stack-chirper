import { Query } from './index';

const all = async () => Query('SELECT * from Chirps');

export default {
    all
}