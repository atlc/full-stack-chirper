import * as mysql from 'mysql';
import config from '../config';
import Chirps from './queries';

const pool = mysql.createPool(config.mysql);


export const Query = (query, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        })
    })
}


export default {
    Chirps
}