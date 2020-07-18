"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const BlogController = require('../controllers/blog');


router.get('/', BlogController.list);
router.get('/my-blogs', BlogController.listMyBlogs);
router.post('/', BlogController.create);
router.get('/:id', BlogController.read);
router.put('/:id', middlewares.checkAuthentication, BlogController.update);
router.delete('/:id', middlewares.checkAuthentication, BlogController.remove);



module.exports = router;