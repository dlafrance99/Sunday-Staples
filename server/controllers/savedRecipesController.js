const db = require("../models");

module.exports = {
    findAllSavedRecipes: function(req,res) {
        db.SavedRecipes
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    createSavedRecipe: function(req,res) {
        db.SavedRecipes
        .create({
            title: req.body.name,
            url: req.body.link,
            image: req.body.image,
            totalTime: req.body.time,
            servings: req.body.servings,
            ingredients:req.body.ingredients
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    deleteSavedRecipe: function(req,res) {
        db.SavedRecipes
        .findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}
