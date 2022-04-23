const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();


server.use(express.json());
server.use(express.urlencoded({ extended: false}));
server.use(cors());

// Authentication Endpoint
const authApi = require('./api-routes/auth/auth');
const authRegisterApi = require('./api-routes/auth/register');

// Genarate API Key Endpoint
const genarateApiKey = require('./api-routes/auth/genarateApiKey');

// Log API Endpoint
const logApi = require('./api-routes/api-v1/log');

// Payment Endpoint
const stripePay = require('./api-routes/payment/stripe');

const PORT = process.env.PORT || 3500;


// Internal Endpoint
server.use('/api/v1/auth', genarateApiKey);
server.use('/api/v1', logApi);

// Public Endpoint
server.use('/api/v1/auth', authApi);
server.use('/api/v1/auth', authRegisterApi);
server.use('/api/v1/payments', stripePay);


server.listen(PORT, () => console.log(`Server Started at ${PORT}`));