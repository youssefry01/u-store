const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')


// router.use(verifyJWT)


router.route('/')
    .get(usersController.getAllUsers)
    .patch(usersController.updateUser)
    
router.route('/user/:id')
    .get(usersController.getUserById)
    .delete(usersController.deleteUser)

module.exports = router;