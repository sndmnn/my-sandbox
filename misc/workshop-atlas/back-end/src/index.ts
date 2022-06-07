import 'reflect-metadata';
import 'dotenv/config';
import Express, { json } from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import productRouter from '@modules/product/web/routers/productsRouter.router';
import cartRouter from '@modules/product/web/routers/cartRouter.router';

createConnection();

const app = Express();

app.use(json());
app.use(cors());

app.get('/', (_, res) => res.send('OK'));
app.use('/products', productRouter);
app.use('/cart', cartRouter);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('Server started on port 3333'));
