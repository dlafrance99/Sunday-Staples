const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedRecipeSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    image: {type: String},
    totalTime: {type: Number},
    servings: {type: Number},
    ingredients: {type: Array}
});

module.exports = savedRecipes = mongoose.model("SavedRecipes", savedRecipeSchema);