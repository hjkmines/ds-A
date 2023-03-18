const categoryValidator = (req, res, next) => {
    if (req.body) {
        if (!req.body.categoryName || !req.body.gender) {
            res
            .status(400)
            .end('Missing required fields!')
        } else {
            next()
        }
    } else {
        res
        .status(400)
        .end('Missing required fields!')
    }
}

// itemValidator
/*
 - itemName
 - itemDescription
 - gender
 - price
 - colors
 - sizes
*/

const itemValidator = (req, res, next) => {
    if (req.body) {
        if(!req.body.itemName || 
            !req.body.itemDescription ||
            !req.body.gender ||
            !req.body.price ||
            !req.body.colors ||
            !req.body.sizes
        ) {
                res
                .status(400)
                .end('Missing required fields!')
        } else {
            next()
        }
    } else {
        res
        .status(400)
        .end('Missing required fields')
    }
}

// userValidator
/*
 - userName
 - firstName
 - lastName
 - gender
 - email
 - password
*/

const userValidator = (req, res, next) => {
    if (req.body) {
        if(!req.body.userName ||
            !req.body.firstName ||
            !req.body.lastName || 
            !req.body.gender ||
            !req.body.email ||
            !req.body.password
            ) {
                res
                .status(400)
                .end('Missing required fields')
            }
            else {
                next()
            }
    } else {
        res
        .status(400)
        .end('Missing required fields')
    }
}

module.exports = {
    categoryValidator,
    itemValidator,
    userValidator
}

// Given the following array: 
const numbers = [
    {
        num: 1
    }, 
    {
        num: 2
    }, 
    {
        num: 3
    }
]

// Problem 1: 
// Use a for loop directly on this array to console log out
// each of the key's values, so one console.log() should be 
// logged out each iteration of the loop like

// 1
// 2
// 3

// Problem 2: 
// Create a algorithm or function that returns the sum of all the values
// Should return back 6
