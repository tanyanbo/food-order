const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.route('/user').post(async (req, res) => {
  const user = User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    contactNumber: req.body.contactNumber,
  });

  await user.save();

  res.json({
    status: 'success',
    user,
  });
});

router.post('/login', async (req, res) => {
  const user = await User.find({ email: req.body.email });

  if (user.length === 0) {
    return res
      .status(404)
      .json({ status: 'fail', message: 'Incorrect username or password' });
  }

  const passwordCorrect = await bcrypt.compare(
    req.body.password,
    user[0].password
  );

  const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SECRET, {
    expiresIn: '7 days',
  });

  if (passwordCorrect) {
    res.json({
      status: 'success',
      token,
    });
  } else {
    res.status(403).json({
      status: 'fail',
      message: 'Incorrect username or password',
    });
  }
});

module.exports = router;
