import axios from "axios";

export default {
    getRandomReceipe: function() {
        return axios.get("");
    },

    getSearchReceipe: function() {
        return axios.get("");
    }
}