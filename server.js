const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pantry2table");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


// const express = require("express"),
//   app = express(),
//   mongoose = require("mongoose"),
//   bcrypt = require("bcrypt"),
//   bodyParser = require("body-parser");

// const saltRounds = 10;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost/node_bcrypt", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   joined: { type: Date, default: Date.now },
// });

// const User = mongoose.model("user", userSchema);

// app.get("/", (req, res) => {
//   res.send("Welcome to authentication tutorial");
// });

// app.post("/register", async (req, res) => {
//   console.log(req.body);
//   try {
//     const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
//     const insertResult = await User.create({
//       username: req.body.username,
//       password: hashedPwd,
//     });
//     res.send(insertResult);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server error Occured");
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     console.log(user);
//     if (user) {
//       const cmp = await bcrypt.compare(req.body.password, user.password);
//       if (cmp) {
//         //   ..... further code to maintain authentication like jwt or sessions
//         res.send("Auth Successful");
//       } else {
//         res.send("Wrong username or password.");
//       }
//     } else {
//       res.send("Wrong username or password.");
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal Server error Occured");
//   }
// });

// app.listen(3001, () => {
//   console.log("Server started at port 3001");
// });