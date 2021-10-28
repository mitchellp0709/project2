///////////////////////////////////////
//Import dependencies
///////////////////////////////////////

const express = require("express");
const User = require("../models/user")
const bcrypt = require("bcryptjs")


///////////////////////////////////////
//create router
///////////////////////////////////////

const router = express.Router()


///////////////////////////////////////
//Routes
///////////////////////////////////////

//SIGNUP 

router.get("/signup",(req, res) => {
  res.render("user/signup.liquid")
})


router.post("/signup", async (req, res) => {

  //change plaintext password to encrypted password and replace it in the body
  req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
  
  //save user in database
  User.create(req.body)
    .then((user) =>
      res.redirect("/login"))
    .catch((error)=>{res.json(error)})
})



//LOGIN

router.get("/login", (req, res) => {
  res.render("user/login.liquid")
})

router.post("/login", async (req, res) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then(async (user) => {
      //if user is in database
      if (user) {
        //compare passwords
        const result = await bcrypt.compare(password, user.password)
        //if passwords match
        if (result === true) {
          req.session.username = username;
          req.session.loggedIn = true;
          res.redirect("/gods");
          //if passwords don't match
        } else {
          res.json({error:"Password doesn't match"})
        }
        //if user is not in database
      } else {
          res.json({error: "user doesn't exist"})
    }
    })
    .catch((error)=>{console.log(error)})
})


//LOG OUT

router.get("/logout", (req, res) => {
  //delete session
  req.session.destroy((err) => {
    //send user back to the main page 
    res.redirect("/")
  })
})




/////////////////////////
//Export router
/////////////////////////

module.exports = router;