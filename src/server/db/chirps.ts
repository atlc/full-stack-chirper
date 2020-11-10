import { Query } from './index';

const all = async () => Query('SELECT * from chirps');

export default {
    all
}