const db = require("../models");

module.exports = {    
    findCurrentList: function(req,res) {
        db.ShoppingList
        .find({ $and: [{user: req.params.id}, {complete: false}] })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findThreeMostRecent: function(req,res) {
        db.ShoppingList
        .find({ $and: [{user: req.params.id}, {complete: true}] })
        .sort({date: -1}).limit(3)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    // What action will create and what will update? If most current list is complete then create a new one, else update the current list
    createShoppingList: function(req,res) {
        db.ShoppingList
        .create({ 
            user: req.body.user,
            ingredients: req.body.ingredients
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    addIngredients: function(req,res) {
        console.log(req.body)
        db.ShoppingList
        .update(
            { _id: req.params.id },
            {$push: {ingredients: req.body.ingredients}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))   
    },
    completeList: function(req,res) {
        console.log(req.params)
        db.ShoppingList
        .update(
            { _id: req.params.id },
            { complete: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))  
    },
    deleteItem: function(req,res){
        db.ShoppingList
        .update(
            { "_id" : req.params.id  },
            { "$pull" : { "ingredients" :  req.body.ingredient}  
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))  
    },
    deleteList: function(req,res) {
        db.ShoppingList
        .findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findListByDate: function(req,res) {
        db.ShoppingList
        .find({  $and: [{user: req.body.user}, {date: req.body}] })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}