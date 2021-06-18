require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const db = require('./src/models');
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser')

// Configure logger
app.use(logger('dev'));

// Set public folder path
app.use(express.static('src/public'));

// Configure body parser
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

// Configure and connect to database
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('Connect to database successfully!!!');
    })
    .catch(err => {
        throw new Error(err.message || 'Connect to database failure!!!');
    })


// Configure routing
require('./src/routers')(app);

// Configure listening
app.listen(PORT, () => {
    console.log(`Server starts listening on http://localhost:${PORT}`)
})