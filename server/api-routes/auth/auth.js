const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const connection = require('../../config/dbConfig');
require('dotenv').config();


router.post('/login', () => {

});


module.exports = router;