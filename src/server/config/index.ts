import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        schema: process.env.DB_SCHEMA
    }
}