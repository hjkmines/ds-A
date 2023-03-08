const User = require('../models/User');

/**
 *  For '/user' to retrieve all users, create a user and delete all users
 */
const getUsers = async (req, res, next) => {
    try {
        const result = await User.find()

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error retrieving users: ${err.message}`)
    }
}

const postUser = async (req, res, next) => {
    try {
        const result = await User.create(req.body)

        res
            .status(201)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error posting a new user: ${err.message}`)
    }
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

const getUser = async (req, res, next) => {
    try {
        const result = await User.findById(req.params.userId);

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error finding ${result}`)
    }
}

const putUser = async (req, res, next) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.userId, {
            $set: req.body}, {new: true})

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error updating a new user`)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.userId)
        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                success: true,
                msg: `Deleting a user with the id: ${req.params.userId}`
            })
    } catch (err) {
        throw new Error(`Error deleting a user. ${err.message}`)
    }
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}