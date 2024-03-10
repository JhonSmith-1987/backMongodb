import express from 'express';
import bodyParser from 'body-parser';

import {dotenv} from './config/dotenv.js'
import routerApi from "./routes/indexRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;

const port = dotenv.app.port;

routerApi(app);

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`);
});