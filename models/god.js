///////////////////////////
//Import dependencies
///////////////////////////

const mongoose = require("./connection")

//create model



//deconstruct schema and model
const {Schema,model} = mongoose

const godSchema = new Schema({
  name: { type: String, required: true },
  damageType: { type: String, required: true },
  class: { type: String, required: true },
  passive: { type: String, required: true },
  passiveDes: { type: String, required: true },
  ability1: { type: String },
  ability1Des: { type: String },
  ability2: { type: String },
  ability2Des: { type: String },
  ability3: { type: String },
  ability3Des: { type: String },
  ult: { type: String },
  ultDes: { type: String },
  img: String,
  onTeam: Boolean,
  username: String
});

const God = model("God", godSchema)
module.exports = God;