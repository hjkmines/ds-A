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
            .json({ success: true, msg: "Show me all items" })
    } catch (err) {
        throw new Error(`Error retrieving Items: ${err.message}`)
    }
}

// itemName, itemDescription, price, isClearance

const postItem = async (req, res, next) => {
    try {
        await Item.create()

        res
            .status(201)
            .setHeader('Content-Type', "application/json")
            .json({
                success: true, msg: `Creating a new item with the following fields
        itemName: ${req.body.itemName}, 
        itemDescription: ${req.body.itemDescription}, 
        price: ${req.body.price},
        isClearance: ${req.body.isClearance}`
            })
    } catch (error) {
        throw new Error(`Error posting a new item: ${err.message}`)
    }
}

const deleteItems = async (req, res, next) => {
    try {
        await Item.deleteMany()

        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ success: true, msg: "Deleted all items" })
    } catch (error) {
        throw new Error(`Error deleting items: ${err.message}`)
    }
}
/**
 * For "/item:id"
 */
const getItem = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `Showing an item with id: ${req.params.itemId}`
        })
}

const putItem = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            success: true,
            msg: `Updating an item with id: ${req.params.itemId}`
        })
}

const deleteItem = (req, res, next) => {
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ success: true, msg: `Deleting an item with id: ${req.params.itemId}` })
}

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem
}

