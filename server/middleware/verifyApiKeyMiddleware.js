const jwt = require('jsonwebtoken');

const verifyApiKey = (req, res, next) => {
    const clientApiKey = req.headers.apikey;
    const decodedApiToken = jwt.verify(clientApiKey, process.env.API_SECURE_KEY);
    if (!decodedApiToken) {
        return res.status(403).send({ message: "Token required for authentication." })
    }
    else if(decodedApiToken) {
        next();
    }
};


module.exports = verifyApiKey;