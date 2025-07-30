const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const verifyJWT = require('../middleware/verifyJWT.js')

router.route('/')
    .get(productsController.getAllProducts)

    router.route('/:id')
    .get(productsController.getProduct);


// router.use(verifyJWT)

router.route('/')
    .post(productsController.createNewProduct)

    .patch(productsController.updateProduct)
    
    router.route('/:id')
    .delete(productsController.deleteProduct);

module.exports = router;