const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
require('./database');
app.use(
  cors({
    origin: 'http://localhost:3001',
  })
);
app.use(express.json());
app.use(require('./routes/mealRoutes'));
app.use(require('./routes/orderRoutes'));
app.use(require('./routes/userRoutes'));

app.use((err, req, res, next) => {
  res.status(err.statusCode ?? 500).json({
    status: 'fail',
    message: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
