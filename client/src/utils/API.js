import axios from "axios";

export default {
    //edamam
    getRecipes: function (staple) {
        return axios.get(`https://api.edamam.com/search?q=${staple}&app_id=66592fe3&app_key=19823d841e3e1f603bdc16d31a5dce43&from=0&to=2`)
    },

    getNutrition: function (nutrient) {
        return axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${nutrient}&app_id=aeebd946&app_key=66dba634f8298cb2278ffa5bc155fd8c`)
    },
    //saved recipes
    saveRecipe: function (recipe) {
        return axios.post("/api/savedRecipes", recipe)
    },

    deleteSaved: function (id) {
        return axios.delete("/api/savedRecipes/" + id)
    },

    loadSaved: function (user) {
        return axios.get(`/api/savedRecipes/${user}`)
    },
    //shopping list
    createShoppingList: function(info) {
        return axios.post(`api/shoppingList`, info)
    },

    addIngredients: function(info) {
        console.log(info.id, info.user, info.ingredients)
        return axios.put(`api/shoppingList/update/${info.id}`, info.ingredients)
    },

    getCurrent: function (user) {
        console.log(user)
        return axios.get(`/api/shoppingList/${user}`)
    },

    getPrevious: function (user) {
        return axios.get(`/api/shoppingList/previous/${user}`)
    },
    //Reviews
    saveReview: function(review) {
        return axios.post(`/api/reviews` , review)
    }
}