const productRepo = require('../repositories/product.repo');
const {generateSKU} = require('../models/product.models');
const removeVietnameseTones = require('../vendors/removeVietnameseTones')
const convertToSlug = (slug) => {
    return removeVietnameseTones(slug + '').replace(/ /g, '-').toLowerCase();
}



exports.create = (req, productInput) => {
    // Add other infomation for product input
    let slug = productInput.name + '';
    if(!productInput.slug)
        productInput.slug = convertToSlug(slug);
    productInput.rating = {
        grade: 0,
        votes: 0
    };
    productInput.sku = generateSKU(productInput);
    productInput.images = req.files.map(file => {
        return `/images/uploads/${file.filename}`
    })

    // Calling creating repositoty
    return productRepo.create(productInput);
}

exports.findAll = () => {
    return productRepo.findAll();
}

exports.findBySKU = (sku) => {
    return productRepo.findBySKU(sku);
}

exports.deleteBySKU = (sku) => {
    return productRepo.deleteBySKU(sku);
}

exports.updateBySKU = (sku, updateContent) => {
    return productRepo.updateBySKU(sku, updateContent);
}

