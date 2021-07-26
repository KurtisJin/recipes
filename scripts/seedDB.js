const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pantry2table");

const userSeed = [
    {
        // name: 'Ryan',
        // email: 'testemail01@test.com',
        username: 'rtowens11',
        password: 'abc123'
    },
    {
        // name: 'Bob',
        // email: 'testemail02@test.com',
        username: 'bobiscool',
        password: 'abc123'
    }
]

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });