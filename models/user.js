/////////////////////////
//Import Dependencies
/////////////////////////
const mongoose = require("./connection")

///////////////////////////////
// Create User Model
///////////////////////////////

const { Schema, model } = mongoose;

//make the user schema

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

//make user model
const User = model("User", userSchema)

//export the User model
module.exports = User;