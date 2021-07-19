import axios from "axios";

export default {
    getRandomReceipe: function() {
        return axios.get("");
    },

    getRecipe: function() {
        return axios.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=2111bf1d3def4918a76cb5270b0122ce");
    }
}