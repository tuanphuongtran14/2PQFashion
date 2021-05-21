// Import category Model
const Category = require('../models').category;

exports.create = categoryInput => {
    // Creat new category document
    let newcategory = new Category({
        ...categoryInput
    })

    // Save new category to database
    return newcategory.save();
}

exports.findAll = () => {
    return Category.find({});
}

exports.findByID = (id) => {
    return Category.findById(id);
}

exports.deleteByID = (id) => {
    return Category.findByIdAndDelete(id);
}

exports.updateByID = (id, updateContent) => {
    return Category.findByIdAndUpdate(id, {...updateContent});
}