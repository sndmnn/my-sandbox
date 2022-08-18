import 'reflect-metadata';
import './shared/infrastructure/database';
import './shared/container';
import express, { json } from 'express';
import productsRouter from './modules/product/web/routers/products.router';

const app = express();

app.use(json());

app.get('/status', (_, res) => res.status(200).send('Server is running'));

app.use('/products', productsRouter);

app.listen(3333, () => console.log('::Server is running'));
