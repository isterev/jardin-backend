"use strict";

const mongoose = require('mongoose');

const MarketOfferSchema  = new mongoose.Schema({

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },

    contact:{
        type: String,
        required: true
    },

    type:{
        type: String,
        enum : ['Rental', 'Sale'],
        required: true
    },

    category: {
        type: String,
        enum : ['Seeds and Small Plants','Fertilisers', 'Mechanical Equipment',
                'Electronic Equipment', 'Others'],
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: String,

    denomination: {
        type: String,
        enum : ['unit','per kg', 'per gram', 'per day'],
        required: true
    },

    pricePerUnit:  {
        type: Number,
        required: true
    },
    productImage: mongoose.Schema.Types.Buffer // mongoose.Schema.Types.Mixed

});

MarketOfferSchema.set('versionKey', false);
MarketOfferSchema.set('timestamps', true);

module.exports = mongoose.model('MarketOffer', MarketOfferSchema);