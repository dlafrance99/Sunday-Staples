const router = require("express").Router();
const featuredController = require("../../controllers/featuredController");

router.route("/").get(featuredController.findAll);

module.exports = router;
