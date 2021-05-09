const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  orders: {
    type: Array,
    required: true,
  },
});

orderSchema.pre('save', async function (next) {
  const orders = await Order.find({});
  let id;
  let newOrders;
  console.log(orders);
  orders.forEach((order) => {
    if (
      this.name === order.name &&
      this.contactNumber === order.contactNumber &&
      this.address === order.address
    ) {
      newOrders = order.orders.concat(...this.orders);
      id = order._id;
      this.orders = [];
    }
  });

  await Order.findOneAndUpdate({ _id: id }, { orders: newOrders });

  next();
});

orderSchema.post('save', async function (doc) {
  if (doc.orders.length === 0) {
    await Order.findOneAndDelete({ _id: doc._id });
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
