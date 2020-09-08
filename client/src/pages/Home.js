import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import API from "../utils/API";
import Featured from "../components/informationCards/Featured";

const Homestyle = styled.div`
margin: auto;
font-family: 'Questrial', sans-serif;
h2, h3, h4 {
    margin: 0;
}
h2 {
    font-weight: 900;
}
h5 {
    margin-top: 3%;
}
.Home-image {
    background-color: white;
    height: 250px;
    margin-top: 1%;
    padding: 0;
}
.welcome {
    background-color: #85BDA6;
    margin-top: 1%;
    padding: 0;
}
hr {
    border-width: 2px;
    border-color:black;
}
.title-text {
    font-family: 'Playfair Display', serif;
}
.Icons {
    height: 18rem;
}
.iconCard {
    height: 90%;
    width: 100%;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    margin: 6% 2.4% 0;
    padding: 10% 13% 0;
    color: black;
}

.icon1 {
    background-color: #9BC9B6;
}

.icon2 {
    background-color: #F3E5CF;
}

.icon3 {
    background-color: #787986;
}

.icon4 {
    background-color: #F0374D;
}

.icon {
    width: 6rem;
    margin-top: 22%;
}

.PopRecipes {
    height: 30rem;
    border: 2px solid;
}

.popRecipeTitle {
    margin: 1%;
    color: #F6EBDA;
    background-color: #2B2D42;
    font-size: 2rem;
    font-family: 'Playfair Display',serif;
    text-align: center;
    padding: 1%;
}
.Home-Images{
    height: 250px;
    width: 100%;
    padding: 0;
}
`

class Home extends Component {
    state = {
        imageArr: ["assets/images/blackberry.jpg",
            "assets/images/blue.jpg",
            "assets/images/book.jpg",
            "assets/images/breakfast.jpg",
            "assets/images/burrito.jpg",
            "assets/images/cake.jpg",
            "assets/images/castiron.jpg",
            "assets/images/chocolate.jpg",
            "assets/images/flour.jpg",
            "assets/images/fruit.jpg",
            "assets/images/garlic.jpg",
            "assets/images/gather.jpg",
            "assets/images/macroons.jpg",
            "assets/images/milkshake.jpg",
            "assets/images/pasta.jpg",
            "assets/images/peanutbutter.jpg",
            "assets/images/pho.jpg",
            "assets/images/pie.jpg",
            "assets/images/protein.jpg",
            "assets/images/spice.jpg",
            "assets/images/strawberry.jpg",
            "assets/images/tomato.jpg",
            "assets/images/vegebowl.jpg"],
        homeimage: "",
        featuredRecipes: [],
        threeRecipes: []
    }

    componentDidMount() {
        this.getFeatured()
        this.homeImage();
    }

    getFeatured = () => {
        API.getFeatured()
            .then(res => this.setState({featuredRecipes: res.data}))
            .then(res => this.getThree())
            .catch(err => console.log(err))
    }

    getThree = () => {
        const shuffled = this.state.featuredRecipes.sort(() => 0.5 - Math.random()); 
        let selected = shuffled.slice(0, 3);
        this.setState({threeRecipes: selected})
    }
    
    homeImage = () => {
        const randomNum = (Math.floor(Math.random() * this.state.imageArr.length));
        
        this.setState({ homeimage: this.state.imageArr[randomNum] });
        
        setTimeout(() => {this.nextImage();}, 5000);
    }
    
    nextImage = () => {
        const randomNum = (Math.floor(Math.random() * this.state.imageArr.length));
        
        this.setState({ homeimage: this.state.imageArr[randomNum] });

        setTimeout(() => {this.homeImage();}, 5000);
    }

    render() {
        return (
            <>
                <Homestyle>
                <div  className="container">
                    <div className="row">
                    <div className="Home-image col-12">
                        <img className="Home-Images" src={this.state.homeimage} />
                    </div>
                    </div>
                    <div className="welcome row">
                        <div className="col-12">
                        <h2 className="title-text">
                            Welcome to Sunday Staples
                    </h2>

                        <h3 className="title-text">
                            Our website is designed to help make meal planning easier for you!
                    </h3>

                        <hr />

                        <p>
                            We've created a set of tools that add variety to your meal planning, provide food data to help you stay on track, and organize your shopping to save you time! Check out the Recipe Search and input one of your Sunday Staples (e.g. Chicken, Broccoli, Eggs, Oats, Bananas, etc.) to find a new recipe to try out. Utilize the Nutrition Search to find out the nutritional value of any food so that you can keep track of points, calories, carbs, fat, protein and fiber. Save recipes to try later or add ingredients to your shoppinglist. View your Shopping List to add items to your list or view ingredients that you added from a searched recipe. Finally, scroll through the Reviews to see what other people have loved or hated to get some ideas of what to try and what to steer clear of.
                    </p>

                        <p>
                            Food should bring joy, not frustration. Using our tools will certainly make Sunday meal planning easier and more convenient. Think of all the time you'll save and the inspiration that will spark! Be sure to take pictures of your creations and tag #SundayStaples so we can see what you make!
                    </p>
                    </div>
                    </div>
                    <div className="Icons row">
                        <div className="col-3">
                        <Link to="/recipe-search"><p className="iconCard icon1">
                        <img className="icon" src="assets/images/recipe-book.png" alt="recipe icon" />
                        <br/>
                        <h5>Search Recipes</h5>
                        </p></Link> 
                        </div>
                        <div className="col-3">
                        <Link to="/nutrition-search"><p className="iconCard icon2">
                        <img className="icon" src="assets/images/plan.png" alt="list icon" />
                        <br/>
                        <h5>Search Nutrition</h5>
                        </p></Link>
                        </div>
                        <div className="col-3">
                        <Link to="/saved-recipes"><p className="iconCard icon3">
                        <img className="icon" src="assets/images/fried.png" alt="frying pan icon" />
                        <br/>
                        <h5>Save Recipes</h5>
                        </p></Link>
                        </div>
                        <div className="col-3">
                        <Link to="/shopping-list"><p className="iconCard icon4">
                        <img className="icon" src="assets/images/shopping-cart.png" alt="shopping cart icon" />
                        <br/>
                        <h5>Create Shopping List</h5>
                        </p></Link>
                        </div>
                    </div>
                    <div className="PopRecipes row">
                        <div className="col-12">
                            <h4 className="popRecipeTitle">
                                Popular Recipes
                        </h4>
                        <div className="row">
                            {this.state.threeRecipes.map(recipe => (
                                <Featured
                                key={recipe.url}
                                name={recipe.title}
                                link={recipe.url}
                                image={recipe.image}
                                time={recipe.totalTime}
                                servings={recipe.servings}
                                />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
                </Homestyle>
            </>
        )
    }
}

export default Home;