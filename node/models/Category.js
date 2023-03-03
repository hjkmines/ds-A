/*
    2 fields: 
     - categoryName
       - type: string
       - required
       - unique
       - maxLength to be 20
    - gender 
       - type: string
       - required
       - only accept two values: Male or Female

    - ALSO, add in your timestamps!!!!!
*/

const moongese = require('mongoose');
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
         'Male'
      ]
   }
}, {
   timestamp: true
})

module.exports = moongose.model('Category', CategorySchema);