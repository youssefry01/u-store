const Category = require('../models/Category')
const User = require('../models/User')

// @desc Get all categories 
// @route GET /categories
// @access Private
const getAllCategories = async (req, res) => {
    const categories = await Category.find().lean()

    if (!categories?.length) {
        return res.status(400).json({ message: 'No categories found' })
    }

    res.json(categories)
}

// @desc Create new category
// @route POST /categories
// @access Private
const createNewCategory = async (req, res) => {
    const { name, title, description} = req.body

    // Confirm data
    if (!name) {
        return res.status(400).json({ message: 'Name is required' })
    }

    // Check for duplicate name
    const duplicate = await Category.findOne({ name }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: `Duplicate category name "${name}"` })
    }

    // Create and store the new user 
    const category = await Category.create({ name, title, description });

    if (category) { // Created 
        return res.status(201).json({ message: `New category '${name}' created` })
    } else {
        return res.status(400).json({ message: 'Invalid category data received' })
    }

}

// @desc Update a category
// @route PATCH /categories
// @access Private
const updateCategory = async (req, res) => {
    const { id, name, title, description } = req.body

    // Confirm data
    if (!id || !name || !title || description) {
        return res.status(400).json({ message: 'Category ID is required' })
    }

    // Confirm category exists to update
    const category = await Category.findById(id).exec()

    if (!category) {
        return res.status(400).json({ message: 'Category not found' })
    }

    // Check for duplicate name
    const duplicate = await Category.findOne({ name }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow renaming of the original category 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate category name' })
    }

    category.name = name
    category.title = title
    category.description = description

    const updatedCategory = await category.save()

    res.json(`'${updatedCategory.name}' updated`)
}

// @desc Delete a category
// @route DELETE /categories
// @access Private
const deleteCategory = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'Category ID required' })
    }

    const category = await Category.findById(id).exec()

    if (!category) {
        return res.status(400).json({ message: 'Category not found' })
    }

    const result = await category.deleteOne()

    const reply = `Category '${result.name}' with ID ${result._id} deleted`

    res.json(reply)
}

const getCategory = async (req, res) => {
    const { name } = req.params

    if (!name) {
        return res.status(400).json({ message: 'Category Name required' })
    }

    const category = await Category.findOne({ name: name }).exec();

    if (!category) {
        return res.status(204).json({ message: `No Category matches name ${name}` });
    }

    res.json(category);
};


module.exports = {
    getAllCategories,
    createNewCategory,
    updateCategory,
    deleteCategory,
    getCategory
}