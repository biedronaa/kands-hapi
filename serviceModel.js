const mongoose = require('mongoose');

const ServiceModel = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
    type: String,
    required: true,
    unique: true},
    price: {
    type: Number,
    required: true
    }
});

module.exports = mongoose.model('Service', ServiceModel);
