const router = require("express").Router();
const usersRoutes = require("./users");
const reviewRoutes = require("./reviews");
const savedRecipesRoutes = require("./savedRecipes");
const shoppingListRoutes = require("./shoppingList");
const featuredRoutes = require("./featured");

// Book routes
router.use("/user", usersRoutes);
router.use("/reviews", reviewRoutes);
router.use("/savedRecipes", savedRecipesRoutes);
router.use("/shoppingList", shoppingListRoutes);
router.use("/featuredRecipes", featuredRoutes);


module.exports = router;
