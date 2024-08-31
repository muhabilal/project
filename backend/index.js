import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { contactUs } from './mailer.js'; 
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const mongoURI = process.env.DATABASE;
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate inputs if needed

  const mailSent = await contactUs(name, email, message);

  if (mailSent) {
    res.json({ success: true, message: 'Form submitted successfully' });
  } else {
    console.log('error')
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});


mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connection to the database successful");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

const port = process.env.PORT || 5001;

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});