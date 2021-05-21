const router = require('express').Router();
const {create, getAll, getOne, deleteOne, updateOne} = require('../controllers/product.controllers');

// Getting all products
router.get('/', getAll);

// Creating new product
router.post('/', create);

// Getting product by SKU
router.get('/:sku', getOne);

// Updating product by SKU
router.put('/:sku', updateOne);

// Deleting product by SKU
router.delete('/:sku', deleteOne);

module.exports = router;
