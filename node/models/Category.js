const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
   categoryName: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20
   },
   gender: {
      type: String,
      require: true,
      enum: [
         'Female',
         'Male',
         'female',
         'male'
      ]
   }
}, {
   timestamp: true
})

module.exports = mongoose.model('Category', CategorySchema);