const { Bill } = require('../models/bill.models');
const BillRepo = require('../repositories/bill.repo');
const {generateIdBill}=require('../models/Bill.models')
exports.create = BillInput => {
    
    var today = new Date();
    var time = today.getDate() + ":" + today.getMinutes() + ":" + today.getSeconds();
    BillInput.bookingDate=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    BillInput.deliveryDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+5);
    BillInput.id_Bill=generateIdBill();
    BillInput.status=0;
    return BillRepo.create(BillInput);
}


exports.findAll = () => {
    return BillRepo.findAll();
}

exports.findBillByIdUser = (id_user) => {
    return BillRepo.findBillByIdUser (id_user);
}

exports.findByID = (id) => {
    return BillRepo.findByID(id);
}

exports.deleteByID = (id) => {
    return BillRepo.deleteByID(id);
}

exports.updateByID = (id, updateContent) => {
    return BillRepo.updateByID(id, updateContent);
}

//hủy bỏ bill
exports.cancelBill = (id_Bill) => {
    return BillRepo.cancelBill(id_Bill);
}
