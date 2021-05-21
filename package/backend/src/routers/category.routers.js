const router = require('express').Router();
const {create, getAll, getOne, updateOne, deleteOne} = require('../controllers/category.controllers');

// Getting all categories
router.get('/', getAll);

// Creating new category
router.post('/', create);

// Getting category by ID
router.get('/:id', getOne);

// Updating category by ID
router.put('/:id', updateOne);

// Deleting category by ID
router.delete('/:id', deleteOne);

module.exports = router;
