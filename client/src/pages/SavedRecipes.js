import React, { Component } from "react"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"
import styled from "styled-components"

const savedStyle = styled.div`
.searchedRecipes{
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
}
`

class SavedRecipes extends Component {
    state = {
        savedRecipes: []
    }

    componentDidMount() {
        this.getSaved();
    }

    getSaved = () => {
        API.loadSaved()
            .then(res => this.setState({ savedRecipes: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <savedStyle>
                    <div className="searchedRecipes">
                        <ul>
                            {this.state.savedRecipes.map(recipe => (
                                <RecipeCard
                                    key={recipe.url}
                                    name={recipe.title}
                                    link={recipe.url}
                                    image={recipe.image}
                                    time={recipe.totalTime}
                                    servings={recipe.servings}
                                    ingredients={recipe.ingredients}
                                />
                            ))}
                        </ul>
                    </div>
                </savedStyle>
            </>
        )
    }
}

export default SavedRecipes;