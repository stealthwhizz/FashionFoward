const Product = require('../../models/product'); // Ensure this path is correct

class ProductController {
  // Get all products
  static async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        error: error.message
      });
    }
  }

  // Get products by category
  static async getProductsByCategory(req, res) {
    try {
      const { category } = req.params;
      const products = await Product.find({ category });
      
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        error: error.message
      });
    }
  }

  // Get single product
  static async getSingleProduct(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        error: error.message
      });
    }
  }

  // Search products
  static async searchProducts(req, res) {
    try {
      const { searchTerm } = req.body;
      const products = await Product.find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } }
        ]
      });

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: 'Search error',
        error: error.message
      });
    }
  }
}

module.exports = ProductController;