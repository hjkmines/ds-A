const User = require('../models/User');

/**
 *  For '/user' to retrieve all users, create a user and delete all users
 */
const getUsers = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true, msg: 'Show me all the users'
        })
}

const postUser = (req, res, next) => {
    res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `Creating a new user with the following fields
    email: ${req.body.email},
    userName: ${req.body.userName},
    age: ${req.body.age},
    password: ${req.body.password}`
        })
}

const deleteUsers = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: 'Deleted all users' })
}

/**
 *  For '/user/:userid' to retrive a user, update a user and delete a user
 */

const getUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true, msg: `Show user with id: ${req.params.userId}`
        })
}

const putUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true, msg: `Updating a user with id: ${req.params.userId}`
        })
}

const deleteUser = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: `Deleting a user with the id: ${req.params.userId}` })
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}