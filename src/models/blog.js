"use strict";

const mongoose = require('mongoose');

const BlogSchema  = new mongoose.Schema({

    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    authorFirstName: {
        type: String,
        required: true
    },
    authorLastName: {
        type: String,
        required: true
    },
    articleTitle: {
        type: String,
        required: true
    },
    articleBody: {
        type: String,
        required: true
    }
});

BlogSchema.set('versionKey', false);
BlogSchema.set('timestamps', true);

module.exports = mongoose.model('Blog', BlogSchema);