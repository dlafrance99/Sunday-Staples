const db = require("../models");

module.exports = {
    // Review routes
    findAllReviews: function(req, res) {
      db.Reviews
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    createReview: function(req,res) {
      db.Reviews
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    updateReview: function(req,res) {
      db.Reviews
        .findOneAndUpdate({ _id: req.body.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}