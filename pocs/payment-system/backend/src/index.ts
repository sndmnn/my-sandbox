import express, { json } from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const API_KEY = 'sk_test_51JwztfHtKBHn2mRNU0pdeAsnkUzJJFmlJ7F968CeC7iGo48ELDQcS8mUiAReA98s1kyUWtwsmYG9L4WAsTfARh8A005RT4QGtE';

const app = express();
const stripe = new Stripe(API_KEY, { apiVersion: '2020-08-27' });

app.use(json());
app.use(cors());

app.get('/', (_, res) => res.status(200).json({ message: 'Server Up!' }));

app.post('/create-checkout', async (_, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Stubborn Attachments',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3334/payment-system-poc/success.html',
    cancel_url: 'http://localhost:3334/payment-system-poc/cancel.html',
  });

  return session.url 
    ? res.status(201).json({ paymentPageUrl: session.url }) 
    : res.status(500).json({ message: 'Error creating session' });
});

app.post('/redirect-test', async (_, res) => (
  res.status(200).json({ message: 'Redirected!', redirectTo: 'http://localhost:3334/payment-system-poc/success.html' })
));

app.listen(3333, () => console.log('Server started on port 3333'));
