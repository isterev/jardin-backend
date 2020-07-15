const consultationRequestModel = require('../models/consultationRequest')
const expertModel = require('../models/expert')

const createRequest = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        let consultationRequest = await consultationRequestModel.create(req.body)

        return res.status(201).json(consultationRequest)
    } catch (err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
}
const updateRequest = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        let consultationRequest = await consultationRequestModel.findByIdAndUpdate(req.body['_id'], req.body)

        return res.status(200).json(consultationRequest)
    } catch (err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
}

const getRequests = async (req, res) => {
    try {
        let creator = req.query['creator']
        let consultationRequest = await consultationRequestModel.find({'creator': creator}).sort({createdOn: 'descending'}).exec();

        if (!consultationRequest) return res.status(404).json({
            error: 'Not Found',
            message: `Consultation Request not found`
        });

        return res.status(200).json(consultationRequest)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
}

const getConsultationSessions = async (req, res) => {
    try {
        let creator = req.query['creator']
        let consultationRequest = await consultationRequestModel.find({'consultationSession' : {'$ne' : null}, 'creator': creator})
            .sort({'consultationSession.scheduledFor': 'descending'}).exec()
        return res.status(200).json(consultationRequest)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
}

const getConsultationSessionById = async (req, res) => {
    try {
        console.log(req)
        let consultationRequest = await consultationRequestModel.findById(req.params.id).exec()
        if (!consultationRequest) return res.status(404).json({
            error: 'Not Found',
            message: `Consultation Request not found`
        });
        return res.status(200).json(consultationRequest)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
}

const createExpert = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        let expert = await expertModel.create(req.body)

        return res.status(201).json(expert)
    } catch (err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
}

const getExperts = async (req, res) => {
    try {
        let experts = await expertModel.find({}).exec()
        return res.status(200).json(experts)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
}
module.exports = {
    createRequest,
    getRequests,
    getConsultationSessions,
    getConsultationSessionById,
    createExpert,
    getExperts,
    updateRequest
}