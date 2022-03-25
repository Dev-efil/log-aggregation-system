const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONGO_CONNECTION).then(() => console.log('Database Connected.')).catch((err) => console.log(err));

module.exports = connection;