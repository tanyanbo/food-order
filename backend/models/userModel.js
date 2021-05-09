const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String,
  contactNumber: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
