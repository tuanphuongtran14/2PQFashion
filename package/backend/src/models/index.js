const mongoose = require('mongoose');
const dbConfig = require('../configs/dbConfig');
const productModel = require('./product.models');
const categoryModel = require('./category.models');
const ordersModel = require('./orders.models')
const billModel = require('./bill.models')
const userModel = require('./user.models')
const tagModel = require('./tag.models')
const db = {};

db.url = dbConfig.url;
db.mongoose = mongoose;
db.product = productModel.Product(mongoose);
db.category = categoryModel.Category(mongoose);
db.orders = ordersModel.Orders(mongoose);
db.bill = billModel.Bill(mongoose);
db.user = userModel.User(mongoose);
db.tag = tagModel.Tag(mongoose);

module.exports = db;