import axios from "axios";

export default {
    //featured recipes
    getFeatured: function () {
        return axios.get(`api/featuredRecipes`)
    },
    //edamam
    getRecipes: function (staple) {
        return axios.get(`https://api.edamam.com/search?q=${staple}&app_id=${process.env.REACT_APP_RECID}&app_key=${process.env.REACT_APP_RECKEY}&from=0&to=10`)
    },

    getNutrition: function (nutrient) {
        return axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${nutrient}&app_id=${process.env.REACT_APP_NUTID}&app_key=${process.env.REACT_APP_NUTKEY}`)
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
        console.log(info.ingredients)
        return axios.put(`api/shoppingList/update/${info.id}`, {ingredients: info.ingredients})
    },

    deleteIngredient: function(id, item) {
        return axios.put(`api/shoppingList/current/${id}`, {ingredient: item})
    },

    completeList: function(id) {
        return axios.put(`/api/shoppingList/${id}`)
    },
    getCurrent: function (user) {
        console.log(user)
        return axios.get(`/api/shoppingList/${user}`)
    },

    getPrevious: function (user) {
        return axios.get(`/api/shoppingList/previous/${user}`)
    },

    clearList: function (id) {
        return axios.delete(`/api/shoppingList/${id}`)
    },
    //Reviews
    saveReview: function(review) {
        return axios.post(`/api/reviews` , review)
    },

    loadReviews: function() {
        return axios.get(`/api/reviews`)
    }
}