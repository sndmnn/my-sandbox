import 'reflect-metadata';
import './container';
import './database';
import express, { json } from 'express';
import productRouter from './routers/product.router';

const app = express();
app.use(json());

app.get('/status', (_, res) => res.status(200).send('Server is running'));

app.use('/products', productRouter);

app.listen(3333, () => console.log('::Server is running on port 3333'));
