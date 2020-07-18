"use strict";

const express  = require('express');
const router   = express.Router();
const ExpertConsultationController = require('../controllers/expertConsultation')

router.post('/consultation-requests', ExpertConsultationController.createRequest)
router.put('/consultation-requests', ExpertConsultationController.updateRequest)
router.get('/consultation-requests', ExpertConsultationController.getRequests)
router.get('/consultation-requests/:id', ExpertConsultationController.getConsultationSessionById)
router.get('/consultation-sessions', ExpertConsultationController.getConsultationSessions)
router.get('/consultation-sessions/:id', ExpertConsultationController.getConsultationSessionById)
router.post('/experts', ExpertConsultationController.createExpert)
router.get('/experts', ExpertConsultationController.getExperts)
module.exports = router