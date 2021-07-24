import axios from "axios";

export default {
    getRandomReceipe: function() {
        return axios.get("");
    },

    getRecipe: function(search) {
        return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=2111bf1d3def4918a76cb5270b0122ce`);
    }
}