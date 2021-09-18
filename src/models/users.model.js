
const mongoose = require('mongoose');
const { Schema } = mongoose;
let modelName = "users";

const schema = Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String }
}, { timestamps: true });

module.exports = mongoose.model(modelName, schema);