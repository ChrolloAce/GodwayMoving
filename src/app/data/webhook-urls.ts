/**
 * Webhook URL configuration for external services
 * Edit this file to update webhook endpoints when needed
 */

const WebhookUrls = {
  // Go High Level main webhook URL
  goHighLevel: 'https://services.leadconnectorhq.com/hooks/bTWKBN9ahcLBndefPsYj/webhook-trigger/e256413b-eec7-4e1a-b0e1-7494b5c4fecb',
  
  // Optional: Alternative endpoints for different form types
  goHighLevelForms: {
    contactForm: 'https://services.leadconnectorhq.com/hooks/bTWKBN9ahcLBndefPsYj/webhook-trigger/e256413b-eec7-4e1a-b0e1-7494b5c4fecb',
    quoteForm: 'https://services.leadconnectorhq.com/hooks/bTWKBN9ahcLBndefPsYj/webhook-trigger/e256413b-eec7-4e1a-b0e1-7494b5c4fecb',
  },
  
  // Other external service webhooks can be added here
  makeIntegrations: 'https://hook.us2.make.com/c896bkkrt34fegwibnrhyl4b1fk4pckp',
};

export default WebhookUrls; 