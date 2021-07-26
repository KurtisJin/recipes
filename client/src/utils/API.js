import axios from "axios";

export default {
    getRandomReceipe: function() {
        return axios.get("");
    },

    getRecipe: function(search) {
        return axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=3&apiKey=2111bf1d3def4918a76cb5270b0122ce`);
    },

    getRecipeURL: function(id){
        console.log(id)
        return axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=2111bf1d3def4918a76cb5270b0122ce`);
    },

    saveUser: function(loginData) {
        return axios.post("/api/login", loginData);
      },


      postUser: function(regData){
          return axios.post("api/register", regData);
      },
      logUserOut: function(userData){
          return axios.get("/api/logout", userData);
      }



}