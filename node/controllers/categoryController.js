/*
    For '/category' to retrieve all categories, create a category, and delete all categories
*/

const getCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ success: true, msg: 'Show me all the categories!!!!' })
}

module.exports = {
    getCategories
}