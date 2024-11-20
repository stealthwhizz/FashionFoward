const express = require('express');
const ProductController = require('../app/controllers/productController'); // Ensure this path is correct

const router = express.Router();

// Get all products
router.get('/products', ProductController.getAllProducts);

// Get products by category
router.get('/products/category/:category', ProductController.getProductsByCategory);

// Get single product
router.get('/product/:id', ProductController.getSingleProduct);

// Search products
router.post('/search', ProductController.searchProducts);

module.exports = router;