const db = require("../models");

module.exports = {
    // Review routes
    findAllReviews: function(req, res) {
      db.Reviews
        .find()
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    createReview: function(req,res) {
      db.Reviews
        .create({
          user: req.body.user,
          alias: req.body.alias,
          title: req.body.title,
          url: req.body.url,
          stars: req.body.stars,
          comment: req.body.comment,
          user: req.body.user
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    updateReview: function(req,res) {
      db.Reviews
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}