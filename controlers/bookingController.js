const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Factory = require('./handleFactor');

exports.getCheckoutSession = (req, res, next) => {
  // 1) Get the currently booked tour

  // 2) Create Checkout
  next();
};
