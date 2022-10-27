import request from 'supertest';
import express, { Application } from 'express';
import cors from 'cors';
import router from '../../routes/Api';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(router);

export default request(app);
