const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController.js');
const verifyJWT = require('../middleware/verifyJWT.js')

router.route('/')
    .get(categoriesController.getAllCategories)

    router.route('/:name')
    .get(categoriesController.getCategory);


router.use(verifyJWT)

router.route('/')

    .post(categoriesController.createNewCategory)

    .put(categoriesController.updateCategory)

    router.route('/:id')
    .delete(categoriesController.deleteCategory);

module.exports = router;