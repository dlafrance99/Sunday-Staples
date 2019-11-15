require("dotenv").config()
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI);

const featuredRecipeSeed = [
    {
        title: 'Chicken Vesuvio',
        url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
        image: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
        totalTime: 60,
        servings: 4
    },
    {
        title: 'Truck Stop Cinnamon Rolls',
        url: 'http://www.marthastewart.com/343566/truck-stop-cinnamon-rolls',
        image: 'https://www.edamam.com/web-img/cd5/cd5eac3745161eac4b6f625f4dcc6ae1.jpg',
        totalTime: 160,
        servings: 12
    },
    {
        title: 'Strawberry Sundae With Strawberry Sauce',
        url: 'http://www.bbcgoodfood.com/recipes/6317/',
        image: 'https://www.edamam.com/web-img/2b4/2b4c16a6d5a606c052144947114276c5.jpg',
        totalTime: 25,
        servings: 6
    },
    {
        title: 'Bbq Chicken Quinoa Salad',
        url: 'http://whatsgabycooking.com/bbq-chicken-quinoa-salad/#.UlhzMVAy0uM',
        image: 'https://www.edamam.com/web-img/40d/40d954a4c9f1cc2e0a85d64adc63fa85.jpg',
        totalTime: 15,
        servings: 1
    },
    {
        title: 'Pork Quesadillas',
        url: 'https://www.marthastewart.com/862754/pork-quesadillas',
        image: 'https://www.edamam.com/web-img/310/3109aa67eaebff453982004a29ae61f5.jpg',
        totalTime: 93,
        servings: 4
    },
    {
        title: 'Traditional Beef Pho Recipe',
        url: 'https://www.seriouseats.com/recipes/2012/09/traditional-beef-pho-recipe.html?ref=search',
        image: 'https://www.edamam.com/web-img/e5d/e5d3b8674166e4507311f3ae1e6228b9.jpg',
        totalTime: 360,
        servings: 8
    },
    {
        title: 'Christmas Brownie Lollipops',
        url: 'https://www.bbcgoodfood.com/recipes/69609/christmas-brownie-lollipops',
        image: 'https://www.edamam.com/web-img/4e8/4e8b70fa4cd617ab9553e8f8c2e50505.jpg',
        totalTime: 15,
        servings: 8
    },
    {
        title: 'Bubble & squeak hamburgers',
        url: 'https://www.jamieoliver.com/recipes/pork-recipes/bubble-squeak-hamburgers/',
        image: 'https://www.edamam.com/web-img/9ae/9aede945c4ed6e093a5166e4de793648.jpg',
        totalTime: 25,
        servings: 4
    },
    {
        title: 'Spaghetti Squash Fritters',
        url: 'https://www.epicurious.com/recipes/food/views/spaghetti-squash-fritters',
        image: 'https://www.edamam.com/web-img/df7/df70d74389ad66b32f371521fe4e2678.jpg',
        totalTime: 25,
        servings: 12
    },
    {
        title: 'Cookies and Cream Macarons',
        url: 'http://honestcooking.com/cookies-and-cream-macarons-recipe/',
        image: 'https://www.edamam.com/web-img/d06/d06aa79dadbf1c2e48f02da5a8f67cff.jpg',
        totalTime: 35,
        servings: 4
    },
    {
        title: 'Grilled Tofu Salad With Miso Dressing',
        url: 'https://steamykitchen.com/20074-grilled-tofu-with-miso-dressing-recipe.html',
        image: 'https://www.edamam.com/web-img/272/2724347f1843a7c437faacf837326676.jpg',
        totalTime: 18,
        servings: 4
    },
    {
        title: 'Alfredo Linguine',
        url: 'https://www.delish.com/cooking/recipe-ideas/recipes/a7922/alfredo-linguine-recipe/',
        image: 'https://www.edamam.com/web-img/48d/48d22ced6e798f0f3857e1f66c3eb55e.jpg',
        totalTime: 30,
        servings: 4
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