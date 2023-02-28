const express = require('express');
const router = express.Router();
const {
    getUsers,
    postUser,
    putUser,
    deleteUsers,
    getUser,
    deleteUser
} = require('../controllers/userController');
const logger = require('../middlewares/logger');

// Root: '/'
/**
 * getUsers
 * postUser
 * deleteUsers
 */
router.route('/')
    .get(logger, getUsers)
    .post(logger, postUser)
    .delete(logger, deleteUsers)

// Root: '/:userId'
/**
 * getUser
 * putUser
 * deleteUser
 */

router.route('/:userId')
    .get(logger, getUser)
    .put(logger, putUser)
    .delete(logger, deleteUser)

module.exports = router;