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
const { categoryValidator } = require('../middlewares/validators')

router.route('/')
      .get(logger, getCategories)
      .post(logger, categoryValidator, postCategory)
      .delete(logger, deleteCategories)

router.route('/:categoryId')
      .get(logger, getCategory)
      .put(logger, putCategory)
      .delete(logger, deleteCategory)


module.exports = router;