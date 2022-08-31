import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';

import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();


router.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    });
  
    res.send({ url: session.url})
    console.log(session.url);
  });

  export default router;