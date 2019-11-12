const db = require("../models");

module.exports = {    
    findCurrentList: function(req,res) {
        db.ShoppingList
        .find({ complete: false })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findThreeMostRecent: function(req,res) {
        db.ShoppingList
        .find({ complete: true })
        .sort({date: -1}).limit(3)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    // What action will create and what will update? If most current list is complete then create a new one, else update the current list
    createShoppingList: function(req,res) {
        db.ShoppingList
        .create({ ingredients: req.body.ingredients})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    addIngredients: function(req,res) {
        db.ShoppingList
        .update(
            { complete: false },
            {$push: {ingredients: req.body.ingredients}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))   
    },
    completeList: function(req,res) {
        db.ShoppingList
        .update(
            { complete: false },
            { complete: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))  
    },
    deleteList: function(req,res) {
        db.ShoppingList
        .findById({ _id: req.body.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findListByDate: function(req,res) {
        db.ShoppingList
        .find({ date: req.body })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}