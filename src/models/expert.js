"use strict";

const mongoose = require('mongoose')

const expertSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quotation: {
        type: String,
        required: true
    },
    imageFileName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Experts', expertSchema);
