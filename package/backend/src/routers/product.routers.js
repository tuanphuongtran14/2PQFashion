const router = require('express').Router();
const {create, getAll, getOne, deleteOne, updateOne} = require('../controllers/product.controllers');
const authenAdmin = require('../validations/authenAdmin');

// Getting all products
router.get('/', getAll);

// Creating new product
router.post('/', authenAdmin, create);

// Getting product by SKU
router.get('/:sku', getOne);

// Updating product by SKU
router.put('/:sku', authenAdmin, updateOne);

// Deleting product by SKU
router.delete('/:sku', authenAdmin, deleteOne);

module.exports = router;
