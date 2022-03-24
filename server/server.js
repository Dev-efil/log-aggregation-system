const express = require('express');
const server = express();
const dotEnv = require('dotenv');
dotEnv.config();

const PORT = process.env.PORT || 3500;





server.listen(PORT, () => console.log(`Server Started at ${PORT}`));