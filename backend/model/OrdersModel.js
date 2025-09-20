const mongoose = require('mongoose');
const model = mongoose.model;
const {ordersSchema} = require("../schemas/OrdersModel");
const OrdersModel = model("orders",ordersSchema);

module.exports = { OrdersModel};