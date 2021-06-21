const Joi = require('joi');
const removeVietnameseTones = require('../vendors/removeVietnameseTones')

exports.User = function(mongoose) {
    // Creating Product Schema
    const Schema = mongoose.Schema;
    const userSchema = new Schema({
        id_User:String,
        username:String,
        address:String,
        email:String,
        phone: Number,
        password:String,

        
    })

    // Creating User Model
    const User = mongoose.model('User', userSchema);

    return User;
}


