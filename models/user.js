// Dependencies
const mongoose = require("mongoose");

// Global Constant
const Schema = mongoose.Schema;

// Create Schema 
const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    note: { type: String, required: true },
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;