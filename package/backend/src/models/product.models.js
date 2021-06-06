const Joi = require('joi');
const removeVietnameseTones = require('../vendors/removeVietnameseTones')

exports.Product = function(mongoose) {
    // Creating Product Schema
    const Schema = mongoose.Schema;
    const productSchema = new Schema({
        name: String,
        slug: String,
        price: Number,
        rating: {
            grade: Number,
            votes: Number
        },
        brand: String,
        shortDesc: String,
        size: Array,
        color: Array,
        quantity: Number,
        remaining: Number,
        sku: {
            type: String,
            unique: true
        },
        category: String,
        tags: Array,
        fullDesc: String,
        additionalInfo: String,
        images: Array,
        status: Number,
        postOn: Date
    })

    // Creating Product Model
    const Product = mongoose.model('Product', productSchema);

    return Product;
}

exports.validateProduct = function(product) {
    const Joi = require('joi').extend(require("joi-file-extensions"));
    
    let schema = Joi.object({
        name: Joi.string().min(1).max(100).required(),
        price: Joi.number().integer().min(0),
        category: Joi.string().min(1).max(100).required(),
        quantity: Joi.number().integer().min(0),
        shortDesc: Joi.string().max(300),
        brand: Joi.string().min(1),
        size: Joi.array(),
        color: Joi.array(),
        sku: Joi.string(),
        tags: Joi.string(),
        fullDesc: Joi.string(),
        additionalInfo: Joi.string(),
        images: Joi.file().contents(),
        status: Joi.number().min(0).max(3)
    });

    let { error } = schema.validate(product)
    if (error) {
        throw new Error(`Product validation error: ${error.message}`);
    }
}

exports.generateSKU = function(product) {
    let sku = '';
    let categoryWords = product.category.split(' ');
    categoryID = categoryWords[0][0] + categoryWords[1][0]; // First letter first word + first letter second word
    categoryID = removeVietnameseTones(categoryID).toUpperCase();
    let brandID = removeVietnameseTones(product.brand.slice(0,4)).toUpperCase().padEnd(4,0);
    let currentDate = new Date();
    let day = currentDate.getDate().toString().padStart(2,0);
    let month = (currentDate.getMonth()+ 1).toString().padStart(2,0);
    let year = currentDate.getFullYear().toString().slice(2);
    let second = currentDate.getSeconds().toString().padStart(2,0);

    sku += brandID + categoryID + day + month + year + second + Math.floor(Math.random() * 100);
    return sku;
}