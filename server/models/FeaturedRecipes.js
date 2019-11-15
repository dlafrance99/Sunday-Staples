const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuredRecipeSchema = new Schema({
    title: {type: String, required: true},
    url: {type: String, required: true},
    image: {type: String},
    totalTime: {type: Number},
    servings: {type: Number}
});

module.exports = featuredRecipes = mongoose.model("FeaturedRecipes", featuredRecipeSchema);