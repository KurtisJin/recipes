const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const user = require("../models/user");

const saltRounds = 10;

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await user.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hashedPwd,
    });
    res.send(insertResult);
    req.session = {
      isLoggedIn: true,
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

router.get("/login", async (req, res) => {
  try {
    const loginUser = await user.findOne({ username: req.body.username });
    console.log(loginUser);
    if (loginUser) {
      const cmp = await bcrypt.compare(req.body.password, loginUser.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        req.session = {
          isLoggedIn: true,
        }
        res.send("Auth Successful");
      } else {
        req.session = {
          isLoggedIn: false,
        }
        res.send("Wrong username or password.");
      }
    } else {
      req.session = {
        isLoggedIn: false,
      }
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});


router.get('/logout', (req, res) => {
  req.session = {
    isLoggedIn: false
  }
})
    
router.get('/currentUser', (req, res) => {
  req.session = {
    isLoggedIn: true,
  }
  if (req.session.isLoggedIn) {
    res.status(200).send();
  } else {
    res.status(401)
  }
})

// router.get('/currentUser', (req, res) => {
//   // don't actually do this this comes from the middleware
//   req.session = {
//     isLoggedIn: true,
//   }
// ​
//   if (req.session.isLoggedIn) {
//     res.status(200).send();
//   } else {
//     res.status(401).send();
//   }
// });

module.exports = router;
