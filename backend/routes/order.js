const express = require("express");
const { getOrders } = require("../controllers/orderController");
const router = express.Router();

router.route('/order').post(getOrders);

module.exports = router;