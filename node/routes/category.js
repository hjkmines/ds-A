const express = require('express');
const router = express.Router(); 
const {
      getCategories, 
      postCategory, 
      deleteCategories, 
      getCategory, 
      putCategory, 
      deleteCategory
} = require('../controllers/categoryController');
const logger = require('../middlewares/logger');

router.route('/')
      .get(logger, getCategories)
      .post(logger, postCategory)
      .delete(logger, deleteCategories)

router.route('/:categoryId')
      .get(logger, getCategory)
      .put(logger, putCategory)
      .delete(logger, deleteCategory)


module.exports = router;