const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const UserSchema = new Schema({
  googleID:{
    type:String,
    required:true
  },
  email :{
    type: String,
    requires: true
  },
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  image:{
    type:String
  }
});

//create collection and add schema

mongoose.model("users",UserSchema);