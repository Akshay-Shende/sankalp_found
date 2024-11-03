// src/app/api/contact/route.js
import nodemailer from 'nodemailer';
import conf from '@/app/config';
export async function POST(req) {
  debugger
  const { name, email, message } = await req.json();
console.log(name,email,message +"---->");

console.log(conf.email);
console.log(conf.emailPassword);

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., you can use Gmail, or set up with a custom SMTP server
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // Your email address to receive contact form submissions
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
