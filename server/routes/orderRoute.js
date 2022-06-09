const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/orderCtrl');
const authAdmin = require('../middlewares/authAdmin');
const { auth, verifyTokenandAuth } = require('../middlewares/auth')

const { createOrder, getAllOrders, getUserOrder, updateOrder, deleteOrder, getMonthlyIncome } = orderCtrl

router.route('/').post(auth, createOrder);
router.route('/:userId').get(verifyTokenandAuth, getUserOrder);
router.route('/').get(auth, authAdmin, getAllOrders);
router.route('/update/:id').patch(auth, authAdmin, updateOrder);
router.route('/delete/:id').delete(auth, authAdmin, deleteOrder);
router.route('/stats').post(auth, authAdmin, getMonthlyIncome);


module.exports = router     