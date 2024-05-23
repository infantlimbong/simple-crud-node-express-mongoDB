const express = require("express");
const Article = require("../models/article.model");
const router = express.Router();
const { getArticles, getArticle, createArticle, updateArticle, deleteArticle } = require('../controllers/articles.controller')

router.get('/', getArticles)
router.post('/', createArticle)
router.get('/:id', getArticle)
router.put('/:id', updateArticle)
router.delete('/:id', deleteArticle)

module.exports = router