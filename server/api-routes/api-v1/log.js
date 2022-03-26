const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConfig');
const verifyToken = require('../../middleware/verifyTokenMiddleware');
const verifyApiKey = require('../../middleware/verifyApiKeyMiddleware');


// GetAll Log
router.get('/logs', verifyApiKey, verifyToken, (req, res) => {
    res.status(200).json({ message: 'here'});
});

// Post Logs
router.post('/logs', verifyApiKey, verifyToken, (req, res) => {
    let api_Key = req.query.api_key;

    if (api_Key === "123") {
        console.log("Verified Key");
    }
    else {
        console.log("Auth Failed");
    }

});


module.exports = router;