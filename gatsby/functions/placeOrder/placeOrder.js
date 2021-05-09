const nodemailer = require('nodemailer');

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // Send an email
  const info = await transporter.sendMail({
    from: 'The Wonderful World of Dogs <thewonderfulworldofdogs@example.com>',
    to: 'orders@example.com',
    subject: 'New Order!',
    html: `<p>Thanks for ordering!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
