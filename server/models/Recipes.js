const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuredRecipeSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    image: {type: String},
    totalTime: {type: Number},
    servings: {type: Number},
    ingredients: {type: Array}
});

const FeaturedRecipes = mongoose.model("FeaturedRecipes", featuredRecipeSchema);

module.exports = FeaturedRecipes;