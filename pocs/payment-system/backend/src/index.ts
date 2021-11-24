import express, { json } from 'express';
import Stripe from 'stripe';

const API_KEY = 'sk_test_51JwztfHtKBHn2mRNU0pdeAsnkUzJJFmlJ7F968CeC7iGo48ELDQcS8mUiAReA98s1kyUWtwsmYG9L4WAsTfARh8A005RT4QGtE';

const app = express();
const stripe = new Stripe(API_KEY, { apiVersion: '2020-08-27' });

app.use(json());

app.get('/', (_, res) => res.status(200).json({ message: 'Server Up!' }));

app.post('/create-checkout', async (_, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'brl',
    payment_method_types: ['card'],
    receipt_email: 'jenny.rosen@example.com',
  });

  return res.status(200).json({ message: 'Checkout created', paymentIntent });
});

app.listen(3333, () => console.log('Server started on port 3333'));
