const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('../../config/dbConfig');
const GenarateApi = require('../../model/genarateApiModel');
const verifyToken = require('../../middleware/verifyTokenMiddleware');

router.post('/generate-key', verifyToken, async (req, res) => {
    const username = req.body.username;
    const userApiDuration = req.body.userApiDuration;
    const userAccess = req.body.userAccess;

    let token = jwt.sign({ username: req.body.username, userAccess: { accessLevel: userAccess.accessLevel, access: userAccess.access } }, process.env.API_SECURE_KEY, { expiresIn: `${userApiDuration} days` });

    const newApiKey = new GenarateApi({
        username: req.body.username,
        apiKey: token,
        userApiDuration: req.body.userApiDuration,
        userAccess: req.body.userAccess
    });
    try {
        const saveNewApiKey = await newApiKey.save();
        return res.status(200).json(saveNewApiKey);
    } catch (error) {
        return res.status(401).send({ Error: error });
    }
});

module.exports = router;