import React, { Component } from "react";
import styled from "styled-components"
import API from "../utils/API"

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
`

class RecipeSearch extends Component {
    state = {
        staple: ""
    }

    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.staple){
            API.getRecipes({
                staple: this.state.staple
            })

            .then(res => console.log(res))
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
                </RecSearch>
            </>
        )
    }
}

export default RecipeSearch;