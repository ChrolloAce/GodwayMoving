/**
 * Webhook URL configuration for external services
 * Edit this file to update webhook endpoints when needed
 */

const WebhookUrls = {
  // Go High Level main webhook URL
  // Replace with your actual Go High Level webhook URL
  goHighLevel: 'https://your-gohighlevel-webhook-url.com/endpoint',
  
  // Optional: Alternative endpoints for different form types
  goHighLevelForms: {
    contactForm: 'https://your-gohighlevel-webhook-url.com/contact',
    quoteForm: 'https://your-gohighlevel-webhook-url.com/quote',
  },
  
  // Other external service webhooks can be added here
  makeIntegrations: 'https://hook.us2.make.com/neln229u0by16e8y53nprbdbacgeabol',
};

export default WebhookUrls; 