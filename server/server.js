const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();


server.use(express.json());
server.use(express.urlencoded({ extended: false}));
server.use(cors());

const logApi = require('./api-routes/api-v1/log');
const authApi = require('./api-routes/auth/auth');

const PORT = process.env.PORT || 3500;


server.use('/auth', authApi);
server.use('/api/v1', logApi);


server.listen(PORT, () => console.log(`Server Started at ${PORT}`));