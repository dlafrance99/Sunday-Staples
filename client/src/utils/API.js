import axios from "axios";

export default {
    getRecipes: function(staple){
        return axios.get(`https://api.edamam.com/search?q=${staple}&app_id=66592fe3&app_key=19823d841e3e1f603bdc16d31a5dce43&from=0&to=1`)
    },

    getNutrition: function(nutrient){
        return axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${nutrient}&app_id=aeebd946&app_key=66dba634f8298cb2278ffa5bc155fd8c`)
    },

    saveRecipe: function(recipe){
        return axios.post("/api/savedRecipes", recipe)
    }
}