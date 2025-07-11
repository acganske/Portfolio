# Email Setup Guide

This guide explains how to set up EmailJS to enable the contact form to send emails directly to `abeganske40@gmail.com`.

## Current Status

✅ **Immediate Functionality**: The contact form currently works using a mailto fallback. When users submit the form, it opens their default email client with the message pre-filled to send to `abeganske40@gmail.com`.

🔧 **Enhanced Functionality**: To enable direct email sending from the web form (without opening the user's email client), follow the setup instructions below.

## EmailJS Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Use `abeganske40@gmail.com` as the email
   - You'll need to create an App Password (not your regular Gmail password)
   - Go to Gmail Settings > Security > 2-Step Verification > App passwords
   - Generate an app password for "EmailJS"
5. Copy the **Service ID** (something like `service_xxxxxxx`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}} - Portfolio Contact

Hello Abraham,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy the **Template ID** (something like `template_xxxxxxx`)

### 4. Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key** (something like `user_xxxxxxxxxxxxxxxx`)

### 5. Configure Environment Variables

Create a `.env` file in your `portfolio-website` directory with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Update .gitignore
Make sure your `.env` file is in `.gitignore` to keep your keys secure:

```
# EmailJS credentials
.env
```

## Testing

1. Restart your development server: `npm start`
2. Fill out the contact form
3. Submit - emails should now be sent directly to `abeganske40@gmail.com`

## Production Deployment

When deploying to platforms like Netlify, Vercel, or Heroku:
1. Add the environment variables in your deployment platform's settings
2. Do NOT include the `.env` file in your repository

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **Service/Template not found**: Verify your IDs are correct
- **Authentication errors**: Regenerate your app password for Gmail
- **Rate limiting**: EmailJS free plan has monthly limits

## Fallback Behavior

If EmailJS is not configured or fails, the form automatically falls back to opening the user's default email client with the message pre-filled. This ensures the contact form always works.

## Security Notes

- Never commit your EmailJS credentials to version control
- Use environment variables for all sensitive data
- Consider rate limiting on the frontend to prevent spam
- EmailJS provides built-in spam protection

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/