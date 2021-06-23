const router = require('express').Router();
const {create, getAll, getOne, deleteOne, updateOne, search } = require('../controllers/product.controllers');
const authenAdmin = require('../validations/authenAdmin');


// Search product
router.get('/search', search);


// Creating new product
router.post('/', authenAdmin, create);

// Getting product by SKU
router.get('/:sku', getOne);

// Updating product by SKU
router.put('/:sku', authenAdmin, updateOne);

// Deleting product by SKU
router.delete('/:sku', authenAdmin, deleteOne);

// Getting all products
router.get('/', getAll);

module.exports = router;
