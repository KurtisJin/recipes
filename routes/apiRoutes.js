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
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

router.post("/login", async (req, res) => {
  try {
    const loginUser = await user.findOne({ username: req.body.username });
    console.log(loginUser);
    if (loginUser) {
      const cmp = await bcrypt.compare(req.body.password, loginUser.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        res.send("Auth Successful");
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

module.exports = router;
