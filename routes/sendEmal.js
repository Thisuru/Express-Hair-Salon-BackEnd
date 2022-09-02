import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import nodemailer from 'nodemailer'

const APP_EMAIL = process.env.APP_EMAIL 
const APP_PASSWORD = process.env.APP_PASSWORD
const RECEIVE_EMAIL = process.env.RECEIVE_EMAIL

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: APP_EMAIL,
    pass: APP_PASSWORD
  }
});

var mailOptions = {
  from: APP_EMAIL,
  to: RECEIVE_EMAIL,
  subject: 'Sending Email using Express-Salon-App',
  text: 'Thank you for the Payemnt!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

export default transporter;