const express = require('express');
const router = express.Router(); 
const {
      getCategories
} = require('../controllers/categoryController');

router.route('/')
      .get(getCategories)

module.exports = router;