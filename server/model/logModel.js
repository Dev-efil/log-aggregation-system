const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    level: {type: String, required: true},
    message: {type: String, required: true},
    time: {type: Date, required: true}
})

module.exports = logSchema;