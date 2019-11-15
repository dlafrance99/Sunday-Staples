import React, { Component } from "react";
import styled from "styled-components";
import Landing from "../components/Landing";

const Homestyle = styled.div`
margin: auto;
font-family: 'Karla', sans-serif;
h2, h3, h4 {
    margin: 0;
}

.Home-image {
    background-color: grey;
    height: 250px;
    width: 80vw;
    margin-left: 10vw;
    margin-top: 5px;
}
.welcome {
    background-color: #9fdfbc;
    width: 78vw;
    margin-left: 10vw;
    padding: 1vw;
    margin-top: 5px;
}
hr {
    border-width: 2px;
    border-color:black;
}
.title-text {
    font-family: 'Playfair Display', serif;
}

.PopRecipes {
    width: 80vw;
    margin-left: 10vw;
    margin-top: 5px;
    border: 2px solid;
}

.popRecipeTitle {
    width: 95%;
    margin-left: 1.5%;
    margin-top: 5px;
    color: white;
    background-color: #108a8a;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
    text-align: center;
    padding: 1%;
}
.Home-Images{
    height: 250px;
    width: 80vw;
}
`

const Home = () => {
    return (
        <>
            <Landing />
            <Homestyle>
                <div className="Home-image">
                    <img className="Home-Images" src="assets/images/blackberry.jpg" />
                </div>

                <div className="welcome">
                    <h2 className="title-text">
                        Welcome to Sunday Staples
                    </h2>

                    <h3 className="title-text">
                        Our website is designed to help make meal planning easier for you!
                    </h3>

                    <hr />

                    <p>
                        We've created a set of tools that add variety to your meal planning, provide food data to help you stay on track, and organize your shopping to save you time! Check out the Recipe Search and input one of your Sunday Staples (e.g. Chicken, Broccoli, Eggs, Oats, Bananas, etc.) to find a new recipe to try out. Utilize the Nutrition Search to find out the nutritional value of any food so that you can keep track of points, calories, carbs, fat, protein and fiber. View the Shopping List page to add items to your list or view ingredients that you added from a searched recipe. Finally, scroll through the Reviews to see what other people have loved or hated to get some ideas of what to try and what to steer clear of.
                    </p>

                    <p>
                        Food should bring joy, not frustration. Using our tools will certainly make Sunday meal planning easier and more convenient. Think of all the time you'll save and the inspiration that will spark! Be sure to take pictures of your creations and tag #SundayStaples so we can see what you make!
                    </p>
                </div>

                <div className="PopRecipes">
                    <h4 className="popRecipeTitle">
                        Popular Recipes
                    </h4>


                </div>
            </Homestyle>
        </>
    )
}

export default Home;