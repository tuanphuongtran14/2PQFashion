const router = require('express').Router();
const {create, getOne, getAll, updateOne, deleteOne} = require('../controllers/user.controllers');

// Creating new user
router.post('/', create);

// Get all user
router.get('/', getAll);

router.get('/:id', getOne);

// Update user by ID
router.put('/:id', updateOne);

// Delete user by ID
router.delete('/:id', deleteOne);

module.exports = router;