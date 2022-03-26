const mongoose = require('mongoose');

const genarateApiSchema = new mongoose.Schema({
    username: {type: String, required: true},
    apiKey: {type: String, required: true},
    userApiDuration: {type: String, required: true},
    userAccess: {
        accessLevel : {type: String, required: true},
        access: [String]
    },
    time: {type: Date, required: true}
});


module.exports = mongoose.model('GenarateApi', genarateApiSchema);