"use strict";

const mongoose = require('mongoose');

const BlogSchema  = new mongoose.Schema({

    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    articleTitle: {
        type: String,
        required: true
    },

    articleBody: {
        type: String,
        required: true
    },

    createdAt: {
        type: mongoose.Schema.Types.Date,
        required: true
    },

    status: {
        type: String,
        enum : ['PUBLISHED', 'UNPUBLISHED', 'DRAFT'],
        required: true
    }

});

BlogSchema.set('versionKey', false);
BlogSchema.set('timestamps', true);

module.exports = mongoose.model('Blog', BlogSchema);