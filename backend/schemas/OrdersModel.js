const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ordersSchema = new Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String
});

module.exports = { ordersSchema};