const express = require('express'); 
const dotenv = require('dotenv');
const category = require('./routes/category');
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

const app = express(); 

if (process.env.NODE_ENV = 'dev') {
    app.use(morgan('dev'))
}

// hook up our resources
app.use('/category', category)

const PORT = process.env.PORT || 5001; 

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})