const express = require("express");
const router = express.Router();
const {
    getItems,
    postItem,
    putItem,
    deleteItems,
    getItem,
    deleteItem
}= require('../controllers/itemController');
const logger = require('../middlewares/logger');
const { itemValidator } = require('../middlewares/validators')

// Root: '/'
/*
  getItems
  postItem
  deleteItems
*/
router.route('/')
    .get(logger, getItems)
    .post(logger, itemValidator, postItem)
    .delete(logger, deleteItems)

// Root: '/:itemId'
/*
  getItem
  putItem
  deleteItem
*/
router.route('/:itemId')
    .get(logger, getItem)
    .put(logger, putItem)
    .delete(logger, deleteItem)

module.exports = router;