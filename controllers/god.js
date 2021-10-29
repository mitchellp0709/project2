/////////////////////////////////
//Import Dependenceies
/////////////////////////////////

//import express
const express = require("express")
//import god model
const God = require("../models/god")


/////////////////////////////////
//Create Router
/////////////////////////////////
const router = express.Router()


////////////////////////////////
//Router middleware
///////////////////////////////
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect("/user/login")
  }
})


///////////////////////////////////
//Routes
///////////////////////////////////



//Seed

const godSeed = require("../seed");

router.get("/seed", (req, res) => {
  God.deleteMany({}).then((data) => {
    God.create(godSeed).then((data) => {
      res.redirect("/gods");
    });
  });
});




//INDEX ROUTE

router.get("/", (req, res) => {
  God.find({username:req.session.username})
    .then((gods) => {
      res.render("gods/index.liquid", { gods });
    })
    .catch((error) => {
      res.json(error);
    });
});

//NEW ROUTE

router.get("/new", (req, res) => {
  res.render("gods/new.liquid");
});

//CREATE ROUTE
router.post("/", (req, res) => {
  if (req.body.class === "Mage" || req.body.class === "Guardian") {
    req.body.damageType = "Magical";
  } else {
    req.body.damageType = "Physical";
  }

  req.body.username=req.session.username
  God.create(req.body)
    .then((god) => {
      res.redirect("/gods");
    })
    .catch((error) => {
      res.json(error);
    });
});

//EDIT ROUTE

router.get("/:id/edit", (req, res) => {
  const id = req.params.id;

  if (req.body.class === "Mage" || req.body.class === "Guardian") {
    req.body.damageType = "Magical";
  } else {
    req.body.damageType = "Physical";
  }
  God.findById(id)
    .then((god) => {
      res.render("gods/edit.liquid", { god });
    })
    .catch((error) => {
      res.json(error);
    });
});


//UPDATE ROUTE

router.put("/:id", (req, res) => {
  const id = req.params.id;
  God.findByIdAndUpdate(id, req.body, { new: true })
    .then((god) => {
      res.redirect("/gods");
    })
    .catch((error) => {
      res.json(error);
    });
});



//DELETE ROUTE

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  God.findByIdAndRemove(id)
    .then((god) => {
      res.redirect("/gods");
    })
    .catch((error) => {
      res.json(error);
    });
});

//Changes the onTeam attribute to True

router.get("/:id/addteam", (req, res) => {
  const id = req.params.id
  God.findByIdAndUpdate(id, { onTeam: true })
    .then((god) => {
    res.redirect("/gods")
  })
})

//Changes the onTeam attribute to False
router.get("/:id/removeteam", (req, res) => {
  const id = req.params.id;
  God.findByIdAndUpdate(id, { onTeam: false }).then((god) => {
    res.redirect("/gods/team");
  });
});

router.get("/team", (req, res) => {
  
  God.find({ onTeam: true, username:req.session.username })
    .then((gods) => {
    res.render("gods/team.liquid",{gods})
    })
    .catch((error)=>{res.json(error)})
})







//RESET ROUTE
router.get("/reset", (req, res) => {

  
  God.deleteMany({ username: req.session.username })
    .then((data) => {
      const username = req.session.username;
      const starter = [...godSeed].map((g) => {
          return { ...g, username };
        });
       God.create(starter).then((data) => {
         res.redirect("/gods");
       });
    })
  })





//SHOW ROUTE
router.get("/:id", (req, res) => {
  const id = req.params.id;
  God.findById(id)
    .then((god) => {
      res.render("gods/show.liquid", { god });
    })
    .catch((error) => {
      res.json(error);
    });
});


//export router
module.exports = router;