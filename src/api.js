"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth  = require('./routes/auth');
const marketOffer = require('./routes/marketOffer');
const blog = require('./routes/blog');
const expertConsultation = require('./routes/expertConsultation')

const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json({limit: '10mb'}));
api.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'Jardin Backend'
    });
});

// API routes
api.use('/auth'  , auth);
api.use('/offers', marketOffer);
api.use('/blogs', blog);
api.use('/expert-consultation', expertConsultation);

module.exports = api;