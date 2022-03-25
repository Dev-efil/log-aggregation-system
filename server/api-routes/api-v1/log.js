const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConfig');

// GetAll Log
router.get('/logs', (req, res) => {
    res.status(200).json({ message: 'here'});
    let api_Key = req.query.api_Key;
    console.log(api_Key);
});

// Post Logs
router.post('/logs', (req, res) => {
    let api_Key = req.query.api_Key;
    console.log(api_Key);
});

module.exports = router;