const express = require('express');

const router = express.Router();

const Meal = require('./mealModel');

router.route('/meals').post(async (req, res) => {
  const meal = Meal(req.body);
  await meal.save();
  res.json({
    status: 'success',
    meal,
  });
});

module.exports = router;
