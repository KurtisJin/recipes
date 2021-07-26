const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await db.User.create({
      // name: req.body.name,
      // email: req.body.email,
      username: req.body.username,
      password: hashedPwd,
    });
    req.session.isLoggedIn = true
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body.password)
    const loginUser = await db.User.findOne({ username: req.body.username });
    console.log(loginUser)
    if (loginUser) {
      const cmp = await bcrypt.compare(req.body.password, loginUser.password);
      console.log(req.body.password)
      console.log(loginUser.password)
      if (cmp) {
        console.log("you did it???")
        //   ..... further code to maintain authentication like jwt or sessions
        req.session.isLoggedIn = true
        res.send("Auth Successfu ");
      } else {
        console.log("fail1?")
        req.session.isLoggedIn = false
        res.send("Wrong username or password.");
      }
    } else {
      console.log("fail2?")
      req.session.isLoggedIn = false
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});


router.get('/logout', (req, res) => {
  req.session.isLoggedIn = false
  // console.log(req.session.isLoggedIn)
  if (req.session.isLoggedIn == false){
  res.status(200).send('I worked');
} else {
  res.status(401).send('oh no');
}
})

router.get('/currentUser', (req, res) => {
  // console.log(req.session.isLoggedIn)
  if (req.session.isLoggedIn == true) {
    res.status(200).send();
  } else {
    res.status(401).send();

  }
})

module.exports = router;
