import React, { Component } from "react";
import styled from "styled-components"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


const RecSearch = styled.div`
font-family: 'Questrial', sans-serif;
h1{
    margin: 0;
    font-family: 'Playfair Display', serif;
}
.search-instructions{
    background-color: #EF233C;
    padding: 10px;
    margin-top: 1%;
}
.stapleInput {
    margin-left: 5px;
    margin-right: 5px;
}
.searchDiv{
    background-color: #EDF2F4;
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
                .then(res => this.shuffleArray(res.data.hits))
                .catch(err => console.log(err))
        }
    }

    shuffleArray = (array) => {
        for (let i = (array.length) - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            const x = array[i];
            array[i] = array[j]
            array[j] = x
        }
        this.setState({
            recipes: array.map(recipe => {
                recipe.saved = false;
                return recipe;
            })
        })
    }

    handlesave = recipe => {
        API.saveRecipe(recipe)
            .then(res => {
                const temparr = [...this.state.recipes];
                const savedIndex = temparr.findIndex(recipe => recipe.recipe.url === res.data.url)

                temparr[savedIndex].saved = true;
                this.setState({ recipes: temparr })
            })
            .catch(err => console.log(err))
    }



    render() {
        // console.log(this.props.auth.user.id)
        return (
            <>
                <RecSearch>
                    <div className="container">
                    <div className="row">
                    <section className="col-12">
                    <div className="search-instructions">
                        <h1>
                            Recipe Search
                        </h1>
                        <p>
                            Add some variety to your meal plan for the week by searching a Sunday Staple (protein, veggie, fruit, anything that you have leftover from the past week) and find a new recipe to try out. If you create an account you can also save the recipe title and link by clicking the Save! button, and then you can come back and view saved recipes by clicking on the Dashboard link to Saved Recipes. It's that easy!
                        </p>
                    </div>

                    <div className="searchDiv">
                        Search Staple:
                    <input
                            value={this.state.staple}
                            onChange={this.handleInputChange}
                            className="stapleInput"
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
                    </section>
                    </div>
                    <div className="searchedRecipes">
                        <ul className="row">
                            {this.state.recipes.slice(0, 6).map(recipe => (
                                <RecipeCard
                                    key={recipe.recipe.url}
                                    name={recipe.recipe.label}
                                    link={recipe.recipe.url}
                                    image={recipe.recipe.image}
                                    time={recipe.recipe.totalTime}
                                    servings={recipe.recipe.yield}
                                    uri={recipe.recipe.uri}
                                    ingredients={recipe.recipe.ingredientLines}
                                    saved={recipe.saved}
                                    handlesave={() => this.handlesave({
                                        name: recipe.recipe.label,
                                        link: recipe.recipe.url,
                                        time: recipe.recipe.totalTime,
                                        servings: recipe.recipe.yield,
                                        image: recipe.recipe.image,
                                        ingredients: recipe.recipe.ingredientLines,
                                        user: this.props.auth.user.id
                                    })}
                                />
                            ))}
                        </ul>
                    </div>
                    </div>
                </RecSearch>
            </>
        )
    }
}

RecipeSearch.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(RecipeSearch);
