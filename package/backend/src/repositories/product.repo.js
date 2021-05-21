// Import Product Model
const Product = require('../models').product;

exports.create = productInput => {
    // Creat new product document
    let newProduct = new Product({
        ...productInput
    })

    // Save new product to database
    return newProduct.save();
}

exports.findAll = () => {
    return Product.find({});
}

exports.findBySKU = (sku) => {
    return Product.findOne({sku: sku});
}

exports.deleteBySKU = (sku) => {
    return Product.findOneAndDelete({sku: sku});
}

exports.updateBySKU = (sku, updateContent) => {
    return Product.findOneAndUpdate({sku: sku}, {...updateContent})
}