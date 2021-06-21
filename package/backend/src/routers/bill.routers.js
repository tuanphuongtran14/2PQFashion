const router = require('express').Router();
const {create, getOne, getAll, updateOne, deleteOne,getBillByIdUser,cancelBill} = require('../controllers/bill.controllers');

// Creating new orders
router.post('/', create);

// Get all orders
router.get('/', getAll);
// Get all orders by id_User
router.get('/user/:id_user', getBillByIdUser);
// Get orders by ID

// Hủy bill
router.post('/cancel-bill', cancelBill);

router.get('/:id', getOne);

// Update orders by ID
router.put('/:id', updateOne);

// Delete orders by ID
router.delete('/:id', deleteOne);

module.exports = router;