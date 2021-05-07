const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: {
    type: Number,
    validate: function (val) {
      return val > 0;
    },
  },
  orders: {
    type: Number,
    default: 0,
  },
});

mealSchema.pre('save', function (next) {
  this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  this.description =
    this.description.charAt(0).toUpperCase() + this.description.slice(1);
  next();
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
