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
    created: { type: Date, default: Date.Now },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

const User = mongoose.model("User", userSchema);
module.exports = User;