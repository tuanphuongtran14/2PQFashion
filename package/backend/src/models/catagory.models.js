const Joi = require('joi');

exports.Category = (mongoose) => {
    // Creating Category Schema
    const Schema = mongoose.Schema;
    const categorySchema = new Schema({
        name: String,
        desc: String,
        tags: Array,
        slug: String
    });

    // Creating Category Model
    const Category = mongoose.model('Category', categorySchema);
    return Category;
}

exports.validateCategory = function(category) {
    let schema = new Joi.object({
        name: Joi.string().min(1),
        desc: Joi.string().min(1),
        tags: Joi.array().min(1)
    })
    
    let {error} = schema.validate(category);
    if (error) {
        throw new Error(`Category validation error: ${error.message}`);
    }
}