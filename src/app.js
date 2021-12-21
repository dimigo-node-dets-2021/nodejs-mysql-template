/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router/index.js';
import config from './config.js';

const port = config.port || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (_, res) => res.send('API Server'));

app.use('/', router);

const server = app.listen(port, () => console.log(`✅ Service is running on ${port}`));
module.exports = server;
