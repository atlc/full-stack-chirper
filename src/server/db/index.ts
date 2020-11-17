import * as mysql from 'mysql';

import Chirps from './queries/chirps';


/* Replace mysql.createPool() */
export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'equifax-admin',
    database: 'chirprapp'
});

export const Query = <T=any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

export default {
    Chirps
}