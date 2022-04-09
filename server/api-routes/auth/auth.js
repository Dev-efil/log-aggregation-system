const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const connection = require('../../config/dbConfig');
const User = require("../../model/userModel");
require('dotenv').config();


router.post('/login', async (req, res) => {
    try {
        const findUser = await User.findOne({ username: req.body.username });
        if (!findUser) {
            return res.status(400).json({ Error: "Authentication Error" });
        } else {
            const decryptHash = await bcrypt.compare(req.body.password, findUser.password);
            if (!decryptHash) {
                return res.status(400).json({ Error: "Authentication Error", Message: "Invalid Credentials" });
            } else {
                let token = jwt.sign({ username: req.body.username, userType: findUser.userType }, process.env.TOKEN, { expiresIn: '1h' });
                const { password,email,userType,username, ...others } = findUser._doc;
                return res.status(200).json({ message: "Authentication Successful", ...others, token: token });
            }
        }
    } catch (error) {
        res.status(500).send({Error: error});
    }
});


module.exports = router;