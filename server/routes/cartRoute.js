const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cartCtrl');
const authAdmin = require('../middlewares/authAdmin');
const { auth, verifyTokenandAuth } = require('../middlewares/auth')

const { createCart, getUserCart, getAllCarts, updateCart, deleteCart } = cartCtrl

router.route('/').post(verifyTokenandAuth, createCart);
router.route('/:userId').get(verifyTokenandAuth,getUserCart);
router.route('/').get(auth, authAdmin, getAllCarts);
router.route('/update/:id').patch(verifyTokenandAuth, updateCart);
router.route('/delete/:id').delete(verifyTokenandAuth, deleteCart);


module.exports = router  