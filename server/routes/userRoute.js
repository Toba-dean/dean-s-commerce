const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const { auth, verifyTokenandAuth } = require('../middlewares/auth')
const authAdmin = require('../middlewares/authAdmin')

const { registerUser, loginUser, getUser, getUsers, deleteUser, updateUser, getStats } = userCtrl

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/user/:id').get(verifyTokenandAuth, getUser);
router.route('/').get(auth, authAdmin, getUsers);
router.route('/stats').get(auth, authAdmin, getStats);
router.route('/delete/:id').delete(verifyTokenandAuth, deleteUser);
router.route('/update/:id').patch(verifyTokenandAuth, updateUser);

module.exports = router   