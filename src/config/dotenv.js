import {config} from 'dotenv';

config();

export const dotenv = {
    app: {
        port: process.env.PORT
    },
    mongo_db: {
        mongo_url: 'tales',
        mongo_user: process.env.MONGO_USER,
        mongo_pass: process.env.MONGO_PASS,
        mongo_db_name: process.env.MONGO_DB_NAME
    }
}