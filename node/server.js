const express = require('express');
const dotenv = require('dotenv');
const category = require('./routes/category');
const item = require('./routes/item');
const user = require('./routes/user');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./config/db');
const errorHandler = require('./middlewares/error');
const cors = require('cors')

dotenv.config({ path: './config/config.env' })

// connects to the MongoDB
db();

const app = express();

// logging dev environment
if (process.env.NODE_ENV = 'dev') {
    app.use(morgan('dev'))
}

app.use(cors({
    origin: '*'
}))

// parse application json
app.use(bodyParser.json())

// hook up our resources
app.use('/category', category)
app.use('/item', item)
app.use('/user', user)

app.use(errorHandler);

//Default port 5001
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})