const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
  .get(reviewController.findAllReviews)
  .post(reviewController.createReview);

router.route("/:id")
  .put(reviewController.updateReview)

module.exports = router;
