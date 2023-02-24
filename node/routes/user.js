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

// Root: '/'
/**
 * getUsers
 * postUser
 * deleteUsers
 */
router.route('/')
    .get(getUsers)
    .post(postUser)
    .delete(deleteUsers)

// Root: '/:userId'
/**
 * getUser
 * putUser
 * deleteUser
 */

router.route('/:userId')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;