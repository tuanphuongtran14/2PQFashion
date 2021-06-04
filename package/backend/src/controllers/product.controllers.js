const productServices = require('../services/product.services');
const {validateProduct} = require('../models/product.models');

exports.create = async (req, res) => {
    let productInput = req.body;

    // If req.body is empty, return 400 Error
    if (!productInput) {
        return res.status(400).json({
            message: 'Can\' create an empty product'
        });
    }
    
    
    // If req.body is not empty, start creating new product
    try {
        // Validate product input
        validateProduct(productInput);

        // Create new product
        let newProduct = await productServices.create(productInput);
        
        return res.status(200).json(newProduct);

    } catch(err) {
        // If errors occur, return 500 Error
        return res.status(500).json({
            message: err.message || "Some error occurred while creating the Product."
        });
    }  
}

exports.getAll = async (req, res) => {
    try{
        // Find all product
        let products = await productServices.findAll();
        return res.status(200).json(products);
    } catch(err) {
        res.status(500).json({
            message:
              err.message || "Some error occurred while retrieving products."
        });
    }
};

exports.getOne = async (req, res) => {
    let sku = req.params.sku;

    try {
        //Find product by SKU
        let product = await productServices.findBySKU(sku);
        
        // If exist product, return it
        if(product) {
            return res.status(200).json(product);
        }

        // If product is not exist, return 404 Error
        return res.status(404).json({
            message: "Not found this product"
        })
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while retrieving product with sku=${sku}.`
        });
    }
}

exports.deleteOne = async (req, res) => {
    let sku = req.params.sku;

    try {
        let product = await productServices.deleteBySKU(sku);
        if(product) {
            res.status(200).json({
                message: "Product was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot delete Product with sku=${sku}. Maybe Product was not found!`
              });
        }
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while deleting product with sku=${sku}.`
        });
    }
}

exports.updateOne = async (req, res) => {
    let sku = req.params.sku;
    let updateContent = req.body;

    // If updated content is null, return 400 Error
    if (!updateContent) {
        return res.status(400).json({
          message: "Data to update can not be empty!"
        });
    }

    // If user update product sku, return 400 Error
    if (updateContent.sku) {
        return res.status(400).json({
          message: "Can\'t update or change product sku"
        });
    }

    try {
        //Update product by SKU
        let product = await productServices.updateBySKU(sku, updateContent);
        
        // If exist product, update and return it
        if(product) {
            return res.status(200).json({ message: "Product was updated successfully." });
        }

        // If product is not exist, return 404 Error
        return res.status(404).json({
            message: `Cannot update Product with sku=${sku}. Maybe Product was not found!`
        })
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while retrieving product with sku=${sku}.`
        });
    }
}