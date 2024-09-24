// mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'itxrobert1997@gmail.com',
    pass: 'bgcnigajxysjxtfc',
  },
});

export const contactUs = async (username, email, message) => {
  console.log('inside', email, username);

  try {
    const mailOptions = {
      from:`${username}`,
      to: 'itxrobert1997@gmail.com',
      subject: `Convaite: ${username} wants to contact you!`,
      html: `Email:${email} <br> ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email has been sent:', info.response);
    
    // Return true to indicate success
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return false to indicate failure
    return false;
  }
};