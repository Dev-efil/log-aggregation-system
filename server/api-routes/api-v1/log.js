const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConfig');
const verifyToken = require('../../middleware/verifyTokenMiddleware');
const verifyApiKey = require('../../middleware/verifyApiKeyMiddleware');


// GetAll Log
router.get('/logs', verifyToken, verifyApiKey, (req, res) => {
    try {
        res.status(200).json({ message: 'here' });
    } catch (error) {
        res.status(401).send({ Error: error });
    }

});

// Post Logs
router.post('/logs', verifyToken, verifyApiKey, (req, res) => {


});


module.exports = router;