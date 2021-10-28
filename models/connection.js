////////////////////////////////
//Import dependecies
////////////////////////////////

require("dotenv").config();
const mongoose = require("mongoose")

////////////////////////////////////
//Establish database connection
////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL,CONFIG)

//connect to Mongo
mongoose.connection
  .on("open", () => console.log("connected to Mongo"))
  .on("close", () => console.log("disconnected from Mongo"))
  .on("error", (error) => console.log(error))
  

  ////////////////////////////////
  //Export Connection
  ////////////////////////////////

  module.exports = mongoose