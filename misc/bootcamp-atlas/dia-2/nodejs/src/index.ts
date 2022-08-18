import 'reflect-metadata';
import './container';
import './database';
import express, { json, static as staticServer } from 'express';
import { join } from 'path';
import cors from 'cors';
import productRouter from './routers/product.router';

const app = express();

app.use(json());
app.use(cors());

app.use('/files', staticServer(join(__dirname, '..', 'public')));

app.get('/status', (_, res) => res.status(200).send('Server is running'));

app.use('/products', productRouter);

app.listen(3333, () => console.log('::Server is running on port 3333'));
