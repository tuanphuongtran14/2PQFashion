const mongoose = require('mongoose');
const dbConfig = require('../configs/dbConfig');
const productModel = require('./product.models');
const categoryModel = require('./catagory.models');
const db = {};

db.url = dbConfig.url;
db.mongoose = mongoose;
db.product = productModel.Product(mongoose);
db.category = categoryModel.Category(mongoose);

module.exports = db;