const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static frontend assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// Explicit root fallback for serverless environments
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /api/services -> JSON array of at least four cloud services
app.get('/api/services', (req, res) => {
  const services = [
    {
      serviceId: 'SRV-101',
      serviceName: 'Amazon EC2',
      category: 'IaaS',
      pricingModel: 'Pay-as-you-go (Per Second)'
    },
    {
      serviceId: 'SRV-102',
      serviceName: 'AWS Lambda',
      category: 'PaaS',
      pricingModel: 'Serverless (Per Request & Compute Duration)'
    },
    {
      serviceId: 'SRV-103',
      serviceName: 'Amazon S3',
      category: 'IaaS',
      pricingModel: 'Tiered Storage (Per GB/Month)'
    },
    {
      serviceId: 'SRV-104',
      serviceName: 'Google Cloud Run',
      category: 'PaaS',
      pricingModel: 'Pay-per-use Container Execution'
    },
    {
      serviceId: 'SRV-105',
      serviceName: 'Salesforce CRM Cloud',
      category: 'SaaS',
      pricingModel: 'Monthly Per-User Subscription'
    }
  ];

  res.status(200).json(services);
});

// GET /api/status -> System health metadata JSON object
app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'Operational',
    developer: 'Shruti Das',
    environment: 'Cloud PaaS'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Enterprise Cloud Service Catalog running on http://localhost:${PORT}`);
  });
}

module.exports = app;