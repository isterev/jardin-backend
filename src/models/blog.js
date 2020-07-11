"use strict";

const mongoose = require('mongoose');

const BlogSchema  = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },

    article_title: {
        type: String,
        required: true
    },

    article_body: {
        type: String,
        required: true
    },

});

BlogSchema.set('versionKey', false);
BlogSchema.set('timestamps', true);

module.exports = mongoose.model('Blog', BlogSchema);