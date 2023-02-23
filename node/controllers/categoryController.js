/*
    For '/category' to retrieve all categories, create a category, and delete all categories
*/

const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ success: true, msg: 'Show me all the categories!!!!' })
}

const postCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, 
        msg: `Creating a new category: ${req.body.categoryName} and for gender: ${req.body.gender}`
    })
}

const deleteCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, 
        msg: 'Deleted all categories'
    })
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