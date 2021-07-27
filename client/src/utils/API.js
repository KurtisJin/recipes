import axios from "axios";

export default {
    getRandomReceipe: function() {
        return axios.get("");
    },

    getRecipe: function(search) {
        return axios.get(`api/ingredients?search=${search}`);
    },

    getRecipeURL: function(id){
        console.log(id)
        return axios.get(`api/recipes?id=${id}`);
    },

    getLoggedIn: function(bool){
        console.log(bool)
        return axios.get("api/currentUser",bool)
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