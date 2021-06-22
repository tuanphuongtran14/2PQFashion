const { Bill } = require('../models/bill.models');
const BillRepo = require('../repositories/bill.repo');
const {generateIdBill}=require('../models/Bill.models')
exports.create = BillInput => {
    
    var today = new Date();
    var time = today.getDate() + ":" + today.getMinutes() + ":" + today.getSeconds();
    BillInput.bookingDate=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    BillInput.deliveryDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+5);
    BillInput.id_Bill=generateIdBill();
    BillInput.status="đang xử lý";
    return BillRepo.create(BillInput);
}


exports.findAll = () => {
    return BillRepo.findAll();
}

exports.search = async (input) => {
    let orders = await BillRepo.findAll();
    
    if(input.code) {
        orders = orders.filter(order => {
            return order.id_Bill.toLowerCase().indexOf(input.code.toLowerCase()) > -1;
        })
    }

    if(input.status >= 0 && input.status <= 4) {
        orders = orders.filter(order => (order.status == input.status));
    }
    
    if(input.sort === "newest") {
        // Sắp xếp giảm dần
        orders = orders.sort(function(bookDate1, bookDate2) {
            return (bookDate1 > bookDate2)? 1 : -1;
        });
    }

    if(input.sort === "oldest") {
        // Sắp xếp tăng dần
        orders = orders.sort(function(bookDate1, bookDate2) {
            return (bookDate1 < bookDate2) ? 1 : -1;
        });
    }

    return orders;
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

