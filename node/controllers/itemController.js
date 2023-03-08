const Item = require('../models/Item');
/**
 * For "/Items" to retrieve
 */

const getItems = async (req, res, next) => {
    try {
        const result = await Item.find()

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error retrieving Items: ${err.message}`)
    }
}

// itemName, itemDescription, price, isClearance

const postItem = async (req, res, next) => {
    try {
        const result = await Item.create(req.body)

        res
            .status(201)
            .setHeader('Content-Type', "application/json")
            .json(result)
    } catch (err) {
        throw new Error(`Error posting a new item: ${err.message}`)
    }
}

const deleteItems = async (req, res, next) => {
    try {
        await Item.deleteMany()

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ 
                success: true, 
                msg: "Deleted all items" 
            })
    } catch (err) {
        throw new Error(`Error deleting items: ${err.message}`)
    }
}
/**
 * For "/item:id"
 */
const getItem = async (req, res, next) => {
    try {
        const result = await Item.findById(req.body.itemId);

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error finding ${result}`)
    }
}

const putItem = async (req, res, next) => {
    try {
        const result = await Item.findByIdAndUpdate(req.params.itemId, {
            //specifically updates the body
            $set: req.body}, {new: true })

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(result)
    } catch (err) {
        throw new Error(`Error updating an item.`)
    }
}

const deleteItem = async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.itemId)

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ 
                success: true, 
                msg: `Deleting an item with id: ${req.params.itemId}` })
    } catch (err) {
        throw new Error(`Error deleting an item ${err.message}`)
    }
}

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem
}

