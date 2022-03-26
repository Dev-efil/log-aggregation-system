const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConfig');
const verifyToken = require('../../middleware/verifyTokenMiddleware');


// GetAll Log
router.get('/logs', verifyToken, (req, res) => {
    res.status(200).json({ message: 'here'});
});

// Post Logs
router.post('/logs', verifyToken, (req, res) => {

});


module.exports = router;