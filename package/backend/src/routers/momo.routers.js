const router = require('express').Router();
const {create,getResponse, get, getAll, updateOne, deleteOne, search, getCartByIdUser,cancelBill, count} = require('../controllers/momo.controllers');


// Get all orders
router.get('/', get);
// Get all orders
// router.post('/response', getResponse);
module.exports = router;