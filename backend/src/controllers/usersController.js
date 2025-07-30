const User = require('../models/User')
const Product = require('../models/Product')
const bcrypt = require('bcrypt')
const { orders } = require('@paypal/checkout-server-sdk')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
    // Get all users from MongoDB
    const users = await User.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
}

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    const { id, username, email, roles, password, orders} = req.body

    // Confirm data 
    if (!id || !username || !email || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({ message: 'All fields except password and orders are required' })
    }

    // Does the user exist to update?
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // Check for duplicate 
    const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // Allow updates to the original user 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    user.username = username
    user.email = email
    user.roles = roles
    user.orders = orders

    if (password) {
        // Hash password 
        user.password = await bcrypt.hash(password, 10) // salt rounds 
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
}

// @desc Get all users
// @route GET /users
// @access Private
const getUserById = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = {id, username: user.username, email: user.email, roles: user.roles, orders: user.orders, updatedAt: user.updatedAt, createdAt: user.createdAt}

    res.json(result)
}

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    res.json({ message: `Username ${result.username} with ID ${result._id} deleted` })
}

module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    deleteUser
}