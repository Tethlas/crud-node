/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', router);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
