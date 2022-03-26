const express = require('express');
const router = express.Router();
const connection = require('../../config/dbConfig');
const bcrypt = require("bcrypt");
const User = require("../../model/userModel");


router.post('/register', async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: hash,
        userType: "user"
    });
    try {
        const userRegister = await newUser.save();
        return res.status(200).json(userRegister);

    } catch (error) {
        return res.status(400).send({ Error: error });
    }

});


module.exports = router;