import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      guestCount,
      location,
      message,
    } = formData

    // Validate required fields
    if (!name || !email || !phone || !eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Format the event type for display
    const eventTypeDisplay = eventType.split('-').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')

    // Email content for notification
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #6B4423;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 30px;
              border: 1px solid #ddd;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 15px;
            }
            .field-label {
              font-weight: bold;
              color: #6B4423;
              margin-bottom: 5px;
            }
            .field-value {
              color: #333;
              padding-left: 10px;
            }
            .divider {
              border-top: 2px solid #ddd;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🤵 New Event Inquiry</h1>
            </div>
            <div class="content">
              <h2 style="color: #6B4423; margin-top: 0;">Contact Information</h2>
              
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="divider"></div>
              
              <h2 style="color: #6B4423;">Event Details</h2>
              
              <div class="field">
                <div class="field-label">Event Type:</div>
                <div class="field-value">${eventTypeDisplay}</div>
              </div>
              
              ${eventDate ? `
              <div class="field">
                <div class="field-label">Event Date:</div>
                <div class="field-value">${new Date(eventDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
              </div>
              ` : ''}
              
              ${guestCount ? `
              <div class="field">
                <div class="field-label">Expected Guests:</div>
                <div class="field-value">${guestCount}</div>
              </div>
              ` : ''}
              
              ${location ? `
              <div class="field">
                <div class="field-label">Event Location/Venue:</div>
                <div class="field-value">${location}</div>
              </div>
              ` : ''}
              
              ${message ? `
              <div class="divider"></div>
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>
              ` : ''}
              
              <div class="divider"></div>
              
              <p style="color: #666; font-size: 14px; margin-top: 20px;">
                This inquiry was submitted through the website contact form on ${new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email notification
    await transporter.sendMail({
      from: `"Delightful Bean Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Event Inquiry: ${eventTypeDisplay} - ${name}`,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
