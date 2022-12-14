import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/', async (req, res) => {

  console.log("data: ", req.body.data);
  console.log("service: ", req.body.price);

  let service = '';

  if(req.body.price === 20){
    service = 'Haircut'
  } else if (req.body.price === 25) {
    service = 'Hair Styling'
  } else {
    service = 'Makeup';
  }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: service,
            },
            unit_amount: req.body.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_URL,
      cancel_url: process.env.CANCEL_URL,
    });
  
    try {
      res.send({ url: session.url})
      console.log(session.url);
      
    } catch (error) {
        console.log(error);
    }
    
  });

  export default router;