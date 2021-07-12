const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PantrySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  pantryList: Array
});

const Pantry = mongoose.model("Pantry", PantrySchema);

module.exports = Pantry;
