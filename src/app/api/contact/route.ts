import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import WebhookUrls from '../../data/webhook-urls';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Try to send email only if email configuration is available
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER || "smtp.gmail.com",
          port: Number(process.env.EMAIL_PORT) || 587,
          secure: process.env.EMAIL_SECURE === 'true' ? true : false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        // Format the date if it exists
        const formattedDate = formData.moveDate ? new Date(formData.moveDate).toLocaleDateString() : 'Not specified';
        
        // Set email content
        const mailOptions = {
          from: process.env.EMAIL_FROM || 'noreply@godwayusa.com',
          to: process.env.EMAIL_TO || 'godwayllc@gmail.com',
          subject: `New Moving Quote Request from ${formData.name}`,
          html: `
            <h1>New Moving Quote Request</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Service Needed:</strong> ${formData.service}</p>
            <p><strong>Preferred Moving Date:</strong> ${formattedDate}</p>
            <p><strong>Moving From:</strong> ${formData.moveFrom || 'Not specified'}</p>
            <p><strong>Moving To:</strong> ${formData.moveTo || 'Not specified'}</p>
            <p><strong>Additional Details:</strong></p>
            <p>${formData.message || 'No additional details provided.'}</p>
            <hr>
            <p>This email was sent from the Godway Moving contact form.</p>
          `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue execution - don't fail the entire request if email fails
      }
    } else {
      console.log('Email configuration not found, skipping email send (using webhook instead)');
    }

    // Also send to Make.com webhook
    try {
      if (WebhookUrls.makeIntegrations) {
        const webhookResponse = await fetch(WebhookUrls.makeIntegrations, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            form_type: 'api_contact_form',
            name: formData.name || '',
            email: formData.email || '',
            phone: formData.phone || '',
            service: formData.service || '',
            message: formData.message || '',
            moveDate: formData.moveDate || '',
            moveFrom: formData.moveFrom || '',
            moveTo: formData.moveTo || '',
            timestamp: new Date().toISOString(),
            source: 'website_api_endpoint'
          }),
        });

        if (!webhookResponse.ok) {
          console.error('Warning: Failed to submit to Make.com webhook:', webhookResponse.status, webhookResponse.statusText);
        } else {
          console.log('Successfully sent data to Make.com webhook');
        }
      } else {
        console.log('Make.com webhook URL not configured');
      }
    } catch (webhookError) {
      console.error('Error submitting to Make.com webhook:', webhookError);
      // Continue with success response even if webhook fails
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your quote request has been submitted successfully!'
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit your request. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
} 