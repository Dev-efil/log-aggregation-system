const jwt = require('jsonwebtoken');

const verifyApiKey = (req, res, next) => {
    try {
        const clientApiKey = req.headers.apikey;
        if (!clientApiKey) {
            res.status(401).send({ message: "API key not found." });
        }
        else if (clientApiKey) {
            jwt.verify(clientApiKey, process.env.API_SECURE_KEY, (err, decodedApiToken) => {
                if (err) {
                    res.status(401).send({ message: "API key is not valid." });
                }
                if (decodedApiToken) {
                    next();
                }
            });
        }
    } catch (error) {
        res.status(401).send({ Error: error });
    }

};


module.exports = verifyApiKey;