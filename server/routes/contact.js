const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper: send email notification
const sendNotificationEmail = async ({ name, email, subject, message }) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `📬 New Portfolio Message${subject ? `: ${subject}` : ''}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden; border: 1px solid #e0e0e0;">
        <div style="background: #1a1a1a; padding: 24px 28px;">
          <h2 style="margin: 0; color: #ffffff; font-size: 18px;">📬 New Contact Form Message</h2>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 12px; font-weight: 600; color: #555; width: 90px; vertical-align: top;">From</td>
              <td style="padding: 10px 12px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 10px 12px;"><a href="mailto:${email}" style="color: #1a73e8;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top;">Subject</td>
              <td style="padding: 10px 12px; color: #1a1a1a;">${subject}</td>
            </tr>` : ''}
          </table>
          <div style="background: #ffffff; border: 1px solid #e8e8e8; border-radius: 8px; padding: 20px; margin-top: 8px;">
            <p style="margin: 0 0 8px; font-weight: 600; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; color: #1a1a1a; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
            You can reply directly to this email — it will go to <strong>${name}</strong> at ${email}.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Save to database
    const newMessage = await Message.create({ name, email, subject, message });

    // Send email notification (non-blocking — don't fail the request if email fails)
    sendNotificationEmail({ name, email, subject, message }).catch((err) =>
      console.error('Email notification failed:', err.message)
    );

    res.status(201).json({ success: true, data: newMessage });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// GET /api/contact  (admin use)
router.get('/', async (_req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
