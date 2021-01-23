const mongoose = require('mongoose');

const ServiceModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Service', ServiceModel);
