"use strict";

const mongoose = require('mongoose')
const consultationSessionSchema = new mongoose.Schema({
    scheduledFor: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    expert: {
        type: mongoose.Schema.Types.ObjectID,
        required: true
    },
    expertSummary:{
        type: String,
        required: true
    }
})
const consultationRequestSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },
    subject: {
        type: String,
        required: true
    },
    createdOn: {
        type: mongoose.Schema.Types.Date,
        required: true,
        index: true
    },
    status: {
        type: String,
        enum : ['CREATED', 'CANCELLED', 'SCHEDULED', 'CONDUCTED'],
        required: true
    },
    consultationSession: {
        type: consultationSessionSchema,
    },
    firstPreference: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    secondPreference: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    thirdPreference: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    category: {
        type: String,
        enum : ['WINTER_GARDEN','AUTUMN_GARDEN', 'SUMMER_GARDEN',
            'SPRING_GARDEN', 'OTHERS'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    scheduledFor: {
        type: String,
        enum: ['FIRST_PREF', 'SECOND_PREF', 'THIRD_PREF']
    }
})

module.exports = mongoose.model('ConsultationRequests', consultationRequestSchema);
mongoose.model('ConsultationSessions', consultationSessionSchema);