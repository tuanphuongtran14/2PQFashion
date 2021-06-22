const router = require('express').Router();
const {create, getOne, getAll, updateOne, deleteOne, search} = require('../controllers/bill.controllers');

// Creating new orders
router.post('/', create);

// Get all orders
router.get('/', getAll);

// Get all orders
router.get('/search', search);

// Get orders by ID
router.get('/:id', getOne);

// Update orders by ID
router.put('/:id', updateOne);

// Delete orders by ID
router.delete('/:id', deleteOne);

module.exports = router;