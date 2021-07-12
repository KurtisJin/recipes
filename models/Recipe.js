const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recipeList: Array
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
