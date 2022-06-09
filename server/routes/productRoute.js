const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl');
const authAdmin = require('../middlewares/authAdmin');
const { auth } = require('../middlewares/auth')

const { createProduct, getProduct, getProducts, updateProduct, deleteProduct } = productCtrl

router.route('/').post(auth, authAdmin, createProduct);
router.route('/:id').get(getProduct);
router.route('/').get(getProducts);
router.route('/update/:id').patch(auth, authAdmin, updateProduct);
router.route('/delete/:id').delete(auth, authAdmin, deleteProduct);


module.exports = router  