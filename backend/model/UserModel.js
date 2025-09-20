const mongoose = require('mongoose');
const model = mongoose.model;
const { UserSchema } = require('../schemas/UserSchema');
const UserModel = model('users', UserSchema);

module.exports = { UserModel };