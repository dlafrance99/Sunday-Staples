const router = require("express").Router();
const shoppingListController = require("../../controllers/shoppingListController");

router.route("/")
  .get(shoppingListController.findCurrentList)
  .post(shoppingListController.createShoppingList)
  .put(shoppingListController.addIngredients)

router.route("/complete")
  .put(shoppingListController.completeList)

router.route("/:id")
  .delete(shoppingListController.deleteList)

router.route("/previous")
  .get(shoppingListController.findThreeMostRecent)

router.route("previous/:date")
  .get(shoppingListController.findListByDate)

module.exports = router;
