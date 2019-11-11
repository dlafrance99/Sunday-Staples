import React, { Component } from "react";
import styled from "styled-components"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"

const RecSearch = styled.div`
h1{
    margin: 0;
}
.search-instructions{
    background-color: #9fdfbc;
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
    padding: 10px;
}
.searchDiv{
    background-color: #F8F8F8;
    width: 80vw;
    margin-left: 10vw;
    padding: 10px;
    text-align: center;
}
.searchInput{
    margin: 5px;
    border-radius: 5px;
    border-color: #d3d3d3;
}
.searchButton{
    border-radius: 5px;
}
.searchedRecipes{
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
}
`

class RecipeSearch extends Component {
    state = {
        staple: "",
        recipes: []
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.staple) {
            API.getRecipes(this.state.staple)
                .then(res => this.setState({ recipes: res.data.hits }))
                .catch(err => console.log(err))
        }
    }

    render() {

        return (
            <>
                <RecSearch>
                    <div className="search-instructions">
                        <h1>
                            Recipe Search
                   </h1>
                        <p>
                            Add some variety to your meal plan for the week by searching a Sunday Staple (protein, veggie, fruit, anything that you have leftover from the past week) and find a new recipe to try out. You can save the recipe title and link by clicking the "Save!" button, and then you can come back and view saved recipes by clicking on "VIEW SAVED". It's that easy!
                   </p>
                        <p>
                            To make it even easier on you, if you like a recipe and want to try it out you can click "ADD TO SHOPPING LIST" and it will transfer the ingredients to your Shopping List page.
                   </p>
                    </div>

                    <div className="searchDiv">
                        Search Staple:
                    <input
                            value={this.state.staple}
                            onChange={this.handleInputChange}
                            name="staple"
                            placeholder="Enter Staple"
                        />
                        <button
                            onClick={this.handleFormSubmit}
                            className="searchButton"
                        >
                            Search
                        </button>
                    </div>

                    <div className="searchedRecipes">
                        <h1>Recipes</h1>
                        <ul>
                            {this.state.recipes.map(recipe => (
                                <RecipeCard 
                                key={recipe.recipe.url}
                                name={recipe.recipe.label}
                                link={recipe.recipe.url}
                                image={recipe.recipe.image}
                                time={recipe.recipe.totalTime}
                                servings={recipe.recipe.yield}
                                ingredients={recipe.recipe.ingredientLines}
                                />
                            ))}
                        </ul>
                    </div>
                </RecSearch>
            </>
        )
    }
}

export default RecipeSearch;