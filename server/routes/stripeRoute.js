const router = require("express").Router();
const payment = require('../controllers/stripeCtrl');

router.route("/").post(payment);

module.exports = router;
