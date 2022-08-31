import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import * as dotenv from 'dotenv'
dotenv.config()

import usersRoutes from './routes/users.js';
import stripeRoutes from './routes/stripe.js';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.use('/users', usersRoutes);
app.use('/booking', stripeRoutes);

app.get('/', (req, res) => res.send('Hello From Home'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
