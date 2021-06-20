const Joi = require('joi');
const removeVietnameseTones = require('../vendors/removeVietnameseTones')

exports.Bill = function(mongoose) {
    // Creating Product Schema
    const Schema = mongoose.Schema;
    const billSchema = new Schema({
        id_User:String,
        id_Bill: {type:String, unique: true},
        nameCustomer:String,
        address:String,
        email:String,
        coupon:String,
        products:Array,
        totalPrice:Number,
        phone: Number,
        paymentMethod: String,
        bookingDate:Date,
        deliveryDate:Date,
        orderNote:String,
        status:String,
        
    })

    // Creating Bill Model
    const Bill = mongoose.model('Bill', billSchema);

    return Bill;
}

exports.validateBill = function(bill) {
    const Joi = require('joi').extend(require("joi-file-extensions"));
    
    let schema = Joi.object({
        id_User: Joi.string().min(1).max(100).required(),
        nameCustomer: Joi.string().min(1).max(100).required(),
        address: Joi.string().min(1).max(100).required(),
        email: Joi.string().min(1).max(100).required(),
        totalPrice: Joi.number(),
        products: Joi.array(),
        phone:Joi.number().integer().min(0),
        paymentMethod: Joi.string().min(1),
        orderNote:Joi.string().min(0),
        coupon: Joi.string().min(0).max(20),
    });

    let { error } = schema.validate(bill)
    if (error) {
        throw new Error(`Bill validation error: ${error.message}`);
    }
}
exports.generateIdBill = function() {
    
        return S4()+'-'+S4()+'-'+S4()+S4()+'-'+S4()+'-'+S4()+S4()+'-'+S4() +S4()+'-'+S4()+'-'+S4()+S4();
}
function S4()
{
  return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}
