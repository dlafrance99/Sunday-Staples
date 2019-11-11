const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
    ingredients: {type: Array},
    date: {
        type: Date,
        default: Date.now
      }
});

module.exports = shoppingList = mongoose.model("ShoppingList", shoppingListSchema);