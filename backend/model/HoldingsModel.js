 const mongoose = require("mongoose");
 const model = mongoose.model;
const {HoldingsSchema } = require("../schemas/HoldingsSchema");


const HoldingsModel = model("holdings",HoldingsSchema);

module.exports = {HoldingsModel};