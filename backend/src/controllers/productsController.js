const Product = require('../models/Product')
const Category = require('../models/Category')

// @desc Get all products 
// @route GET /products
// @access Private
const getAllProducts = async (req, res) => {
    const products = await Product.find().lean()

    if (!products?.length) {
        return res.status(400).json({ message: 'No products found' })
    }

    res.json(products)
}

// @desc Create new product
// @route POST /products
// @access Private
const createNewProduct = async (req, res) => {
    const { name, category, amount, price } = req.body

    // Confirm data
    if (!name || !category) {
        return res.status(400).json({ message: 'Name and Category are required' })
    }

    let categoryId = null;

    // If category is provided, validate it and fetch categoryId
    if (category) {
        const categoryExists = await Category.findOne({ name: category }).lean().exec();
        if (!categoryExists) {
            return res.status(400).json({ message: `Category "${category}" does not exist` });
        }
        categoryId = categoryExists._id;
    }

    // Check for duplicate name
    const duplicate = await Product.findOne({ name }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate product name' })
    }

    // Create and store the new user 
    const product = await Product.create({ name, category, categoryId, amount, price });

    if (product) { // Created 
        return res.status(201).json({ message: 'New product created' })
    } else {
        return res.status(400).json({ message: 'Invalid product data received' })
    }

}

// @desc Update a product
// @route PATCH /products
// @access Private
const updateProduct = async (req, res) => {
    const { id, name, category, sold, price, codes } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' })
    }

    // Confirm product exists to update
    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    if (name !== undefined) product.name = name;
    if (category !== undefined) product.category = category;
    if (sold !== undefined) product.sold = sold;
    if (price !== undefined) product.price = price;
    if (codes !== undefined) product.codes = codes;

    const updatedProduct = await product.save()

    res.json(`'${updatedProduct.name}' updated`)
}

// @desc Delete a product
// @route DELETE /products
// @access Private
const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Product ID required' })
    }

    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    const result = await product.deleteOne()

    const reply = result.acknowledged ? `Product '${product.name}' with ID ${product.id} deleted` : 'Error Deleting Product!'

    res.json(reply)
}

const getProduct = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Product ID required' })
    }

    const product = await Product.findById(id).exec();

    if (!product) {
        return res.status(204).json({ message: `No Product matches id ${id}` });
    }

    res.json(product);
};


module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getProduct
}