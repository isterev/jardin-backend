"use strict";

const BlogModel = require('../models/blog');

const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
        let blog = await BlogModel.create(req.body);

        return res.status(201).json(blog)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};

const read = async (req, res) => {
    try {
        let blog = await BlogModel.findById(req.params.id).exec();

        if (!blog) return res.status(404).json({
            error: 'Not Found',
            message: `Blog not found`
        });

        return res.status(200).json(blog)
    } catch(err) {
        return res.status(500).json({
            error: 'Internal Server Error',
            message: err.message
        });
    }
};

const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    try {
        let blog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }).exec();

        return res.status(200).json(blog);
    } catch(err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};

const remove = async (req, res) => {
    try {
        await BlogModel.findByIdAndRemove(req.params.id).exec();

        return res.status(200).json({message: `Blog with id${req.params.id} was deleted`});
    } catch(err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};

const list  = async (req, res) => {
    try {
        let blogs = await BlogModel.find({}).exec();

        return res.status(200).json(blogs);
    } catch(err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};

const listMyBlogs  = async (req, res) => {
    try {
        let blogs = await BlogModel.find({ authorId: req.query['authorId'] }).exec();

        return res.status(200).json(blogs);
    } catch(err) {
        return res.status(500).json({
            error: 'Internal server error',
            message: err.message
        });
    }
};



module.exports = {
    create,
    read,
    update,
    remove,
    list,
    listMyBlogs
};