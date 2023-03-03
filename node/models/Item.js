/*
    2 fields: 
     - itemName
       - data type of string
       - required
       - maxLength of 100

     - itemDescription
       - data type of string
       - required
       - maxLength of 100

     - gender 
       - type: string
       - required
       - only accept two values: Male or Female

     - price
       - data type of number
       - required
       - set a minimum of 0

     - isClearance
       - data type of boolean
       - default value as false
       
     - image 
       - data type of string

    - ALSO, add in your timestamps!!!!!
*/
const mongoose = require('mongoose');
const Schema = moongose.Schema;

const ItemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    maxLength: 100
  },
  itemDescription: {
    type: String,
    required: true,
    maxLength: 100
  },
  gender: {
    type: String,
    required: true,
    enum: [
      'Female',
      'Male'
    ]
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  isClearance: {
    type: Boolean,
    default: false
  },
  image: {
    type: String
  }
}, {
  timestamp: true
})

module.exports = mongoose.model('Item', ItemSchema);