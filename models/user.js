// Dependencies
const mongoose = require("mongoose");

var Schema = mongoose.Schema; 
var passportLocalMongoose = require('passport-local-mongoose'); 
  
  
var UserSchema = new Schema({    
    username: {type: String, required:true, unique:true}, 
    name: {type: String, unique: true, required: false},
    password: {type: String}
}); 
  
// plugin for passport-local-mongoose 
UserSchema.plugin(passportLocalMongoose); 
  
// export userschema 
module.exports = mongoose.model("User", UserSchema); 
