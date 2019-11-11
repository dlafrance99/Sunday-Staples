const mongoose = require('mongoose');
const db = require('../models');
const DevURI = require('../config/keys').mongoURI;

mongoose.connect(
    process.env.MONGODB_URI ||
    DevURI
);

const featuredRecipeSeed = [
    {
        title: 'Chicken Vesuvio',
        url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
        image: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
        totalTime: 60,
        servings: 4,
        ingredients: ['1/2 cup olive oil', '5 cloves garlic, peeled', '2 large russet potatoes, peeled and cut into chunks', '1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)', '3/4 cup white wine', '3/4 cup chicken stock', '3 tbs chopped parsley', '1 tbs dried oregano', 'Salt and pepper', '1 cup frozen peas, thawed']
    },
    {
        title: 'Truck Stop Cinnamon Rolls',
        url: 'http://www.marthastewart.com/343566/truck-stop-cinnamon-rolls',
        image: 'https://www.edamam.com/web-img/cd5/cd5eac3745161eac4b6f625f4dcc6ae1.jpg',
        totalTime: 160,
        servings: 12,
        ingredients: ['1/4 cup vegetable oil or melted unsalted butter, plus more for baking sheet', '1/4 cup ground cinnamon', 'Cinnamon Roll Dough, risen and at room temperature']
    }
];

db.FeaturedRecipes
    .remove({})
    .then(() => db.FeaturedRecipes.collection.insertMany(featuredRecipeSeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });