const express = require('express');
const bookingController = require('../controlers/bookingController');
const authController = require('../controlers/authController');

const router = express.Router();

router.get(
  '/checkout-session/:tourID',
  authController.protect,
  bookingController.getCheckoutSession,
);

module.exports = router;
