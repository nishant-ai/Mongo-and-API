const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Alien', alienSchema);