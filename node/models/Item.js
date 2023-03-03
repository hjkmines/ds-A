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