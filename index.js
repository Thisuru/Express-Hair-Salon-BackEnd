import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as dotenv from 'dotenv'
dotenv.config()

import userRoutes from './routes/users.js';
import stripeRoutes from './routes/stripe.js';
import sendEmailRoutes from './routes/sendEmal.js';
import stripeCheckoutRoutes from './routes/stripeCheckout.js';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors({credentials: true, origin: true}));

app.use('/users', userRoutes);
app.use('/booking', stripeRoutes);
app.use('/sendemail', sendEmailRoutes);
app.use('/checkout', stripeCheckoutRoutes);

app.get('/', (req, res) => res.send('Hello From Home'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
