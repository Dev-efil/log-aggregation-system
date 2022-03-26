const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(403).send({ message: "Token required for authentication." })
    }
    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN);
    } catch (error) {
        return res.status(401).send({ Error: error });
    }
    return next();
};


module.exports = verifyToken;