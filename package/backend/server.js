require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const db = require('./src/models');
const PORT = process.env.PORT || 3000;
const path = require('path');

// Configure logger
app.use(logger('dev'));

// Set public folder path
app.use(express.static(path.join(__dirname + 'src/public')));

// Configure body parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Configure and connect to database
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
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