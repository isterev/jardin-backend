"use strict";

const express  = require('express');
const router   = express.Router();
const ExpertConsultationController = require('../controllers/expertConsultation')
const checkAuthentication = require("../middlewares").checkAuthentication;

router.post('/consultation-requests', checkAuthentication, ExpertConsultationController.createRequest)
router.put('/consultation-requests', checkAuthentication,ExpertConsultationController.updateRequest)
router.get('/consultation-requests', checkAuthentication,ExpertConsultationController.getRequests)
router.get('/consultation-requests/:id', checkAuthentication,ExpertConsultationController.getConsultationSessionById)
router.get('/consultation-sessions', checkAuthentication,ExpertConsultationController.getConsultationSessions)
router.get('/consultation-sessions/:id', checkAuthentication,ExpertConsultationController.getConsultationSessionById)
router.post('/experts', checkAuthentication,ExpertConsultationController.createExpert)
router.get('/experts', checkAuthentication, ExpertConsultationController.getExperts)
module.exports = router