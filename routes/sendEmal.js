import * as dotenv from 'dotenv'
dotenv.config()

import nodemailer from 'nodemailer'
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  
  try {
      const APP_EMAIL = process.env.APP_EMAIL 
      const APP_PASSWORD = process.env.APP_PASSWORD

      var transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: APP_EMAIL,
          pass: APP_PASSWORD
        }
      });

      var mailOptions = {
        from: APP_EMAIL,
        to: req.body.email,
        subject: 'Sending Email using Express-Salon-App',
        text: 'Thank you for the Payemnt!'
      };

      transporter.sendMail(mailOptions, function(error, info){

        if (error) {
          console.log(error);
        } else {

          console.log('Email sent: ' + info.response);
          console.log("Request body: ", req.body);
          res.send({request: req.body, message : 'Email is sent'})
        }
      });
    
  } catch (error) {
      console.log(error);
  }
  
})

export default router;