const Category = require('../models/Category')
/*
    For '/category' to retrieve all categories, create a category, and delete all categories
*/

const getCategories = async (req, res, next) => {
    try {
        const result = await Category.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (err) {
       throw new Error(`Error retrieving categories: ${err.message}`) 
    }
}

const postCategory = async (req, res, next) => {
    try {
        const result = await Category.create(req.body); 

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(result)       
    } catch (err) {
        throw new Error(`Error posting a new category: ${err.message}`)
    }
}

const deleteCategories = async (req, res, next) => {
    try {
        await Category.deleteMany();

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true, 
            msg: 'Deleted all categories'
        })
    } catch (error) {
        throw new Error(`Error deleting categories: ${err.message}`)
    }
}

/*
    For '/category/:categoryId' to retrieve a category, update a category, and delete a category
*/

const getCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, 
        msg: `Showing me category with id: ${req.params.categoryId}`
    })
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, 
        msg: `Updating a category with id: ${req.params.categoryId}`
    })
}

const deleteCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, 
        msg: `Deleting a category with id: ${req.params.categoryId}`
    })
}

module.exports = {
    getCategories, 
    postCategory, 
    deleteCategories, 
    getCategory, 
    putCategory, 
    deleteCategory
}