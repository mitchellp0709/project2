////////////////////////////////
//Import Dependencies
////////////////////////////////

//brings in express framework
const express = require("express")
//allows for environmental variables
require("dotenv").config();
//web logger
const morgan = require("morgan")
//allows to swap method requests
const methodOverride = require("method-override")
//database
const mongoose = require("mongoose")
//helps for file paths
const path = require("path")

////////////////////////////////
//Establish database connection
////////////////////////////////

//sets inputs for mongoose connection
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology:true
}

////////////////////////////////
//Connect to Mongo
////////////////////////////////
mongoose.connect(DATABASE_URL,CONFIG)

//connection message
mongoose.connection
.on("open",()=>{console.log("connected to Mongo")})
.on("close",()=>{console.log("disconnected from Mongo")})
.on("error",()=>{console.log(error)})


////////////////////////////////
//Create God Model
////////////////////////////////

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
});

//Make the model

const God = model("God",godSchema)

////////////////////////////////
//Create app object and configure liquid
////////////////////////////////

//import liquid
const liquid = require("liquid-express-views")

//construct an absolute path to views folder
const viewsFolder = path.resolve(__dirname,"views/")


//app object iwth liquid and path to the views folder
const app = liquid(express(),{root:viewsFolder})


////////////////////////////////
//Middleware
////////////////////////////////
//register logger
app.use(morgan("tiny"))
//method override
app.use(methodOverride("_method"))
//use Url Encoded for submission
app.use(express.urlencoded({ extended: true }))
//setup public folder to serve files
app.use(express.static("public"))


//////////////////////////////////////////
//Seed Data
//////////////////////////////////////////

const godSeed=require("./seed");


app.get("/gods/seed", (req, res) => {
  God.deleteMany({})
    .then((data) => {
      God.create(godSeed)
      .then((data)=>{res.json(data)})
  })
})















/////////////////////////////////////////////////////////
//Routes
/////////////////////////////////////////////////////////

//INDEX ROUTE

app.get("/gods", (req, res) => {
  God.find({})
    .then((gods) => {
      res.render("gods/index.liquid",{gods});
  })
    .catch((error)=>{res.json(error)})

  
})

//NEW ROUTE

app.get("/gods/new", (req, res) => {
  res.render("gods/new.liquid")
})

//EDIT ROUTE
app.get("/gods/:id/edit", (req, res) => {
  const id =req.params.id
  res.render("gods/edit.liquid")
})













//SHOW ROUTE
app.get("/gods/:id", (req, res) => {
  const id = req.params.id
  God.findById(id)
    .then((god) => {
      res.render("gods/show.liquid", god);
    })
    .catch((error) => {res.json(error)});
})
























//listner

const PORT=process.env.PORT || 4000
app.listen(PORT,console.log(`listening on port ${PORT}`))