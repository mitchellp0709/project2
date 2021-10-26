////////////////////////////////
//Import Dependencies
////////////////////////////////

const express = require("express")

//app object
const app = express()


//route
app.get("/", (req, res) => {
  res.send("This app is working")
})





const PORT=process.env.PORT || 4000
app.listen(PORT,console.log(`listening on port ${PORT}`))