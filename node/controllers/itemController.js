/**
 * For "/Items" to retrieve
 */

const getItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({success: true, msg: "Show me all items"})
}

// itemName, itemDescription, price, isClearance

const postItem = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', "application/json")
    .json({success: true, msg: `Creating a new item with the following fields
        itemName: ${req.body.itemName}, 
        itemDescription: ${req.body.itemDescription}, 
        price: ${req.body.price},
        isClearance: ${req.body.isClearance}`
    })
}

const deleteItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({success: true, msg: "Deleted all items"})
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
    .json({success: true, msg: `Deleting an item with id: ${req.params.itemId}`})
}

module.exports = {
    getItems,
    postItem,
    deleteItems,
    getItem,
    putItem,
    deleteItem
}

