const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();

router.route('/order').post(async (req, res) => {
  const order = Order(req.body);

  await order.save();

  res.json({
    status: 'success',
  });
});

module.exports = router;
