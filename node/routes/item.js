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

// Root: '/'
/*
  getItems
  postItem
  deleteItems
*/
router.route('/')
    .get(getItems)
    .post(postItem)
    .delete(deleteItems)

// Root: '/:itemId'
/*
  getItem
  putItem
  deleteItem
*/
router.route('/:itemId')
    .get(getItem)
    .put(putItem)
    .delete(deleteItem)

module.exports = router;