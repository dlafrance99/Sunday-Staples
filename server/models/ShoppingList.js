const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingListSchema = new Schema({
    user: {type: String, required: true},
    ingredients: {type: Array},
    date: {
        type: Date,
        default: Date.now
    },
    complete: {
        type: Boolean,
        default: false
    }
});

module.exports = shoppingList = mongoose.model("ShoppingList", shoppingListSchema);