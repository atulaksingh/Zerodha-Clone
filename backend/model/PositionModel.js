 const mongoose = require("mongoose");
 const model = mongoose.model;
const {positionsSchema} = require("../schemas/PositionSchema");


const PositionsModel = model("positions",positionsSchema);

module.exports = { PositionsModel};