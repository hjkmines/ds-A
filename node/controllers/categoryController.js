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
        const result = await Category.create(req.body)

        res
            //New data was created
            .status(201)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error posting a new category: ${err.message}`)
    }
}

const deleteCategories = async (req, res, next) => {
    try {
        //we don't want to display what we deleted so we just send a message in json format
        await Category.deleteMany()

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                success: true,
                msg: 'Deleted all categories'
            })
    } catch (err) {
        throw new Error(`Error deleting categories: ${err.message}`)
    }
}

/*
    For '/category/:categoryId' to retrieve a category, update a category, and delete a category
*/

const getCategory = async (req, res, next) => {
    try {
        const result = await Category.findById(req.params.categoryId);

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error finding ${result}`)
    }
}

const putCategory = async (req, res, next) => {
    try {
        const result = await Category.findByIdAndUpdate(req.params.categoryId, {
            $set: req.body
            //returns new data not the original body
        }, { new: true })

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error updating a category.`)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        await Category.findByIdAndDelete(req.params.categoryId)

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                success: true,
                msg: `Deleting a category with id: ${req.params.categoryId}`
            })
    } catch (err) {
        throw new Error(`Error deleting a category. ${err.message}`)
    }
}

module.exports = {
    getCategories,
    postCategory,
    deleteCategories,
    getCategory,
    putCategory,
    deleteCategory
}