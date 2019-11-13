import React, { Component } from "react"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"
import styled from "styled-components"

const SavedStyle = styled.div`
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

    handleDelete = id => {
        console.log(id)
        API.deleteSaved(id.id)
            .then(res => this.getSaved())
            .catch(err => console.log(err))
    }

    handleReview = id => {
        alert("hit review")
    }

    render() {
        return (
            <>
                <SavedStyle>
                    <div className="searchedRecipes">
                        <ul>
                            {this.state.savedRecipes.map(recipe => (
                                <RecipeCard
                                    key={recipe.url}
                                    database={true}
                                    saved={true}
                                    name={recipe.title}
                                    link={recipe.url}
                                    image={recipe.image}
                                    time={recipe.totalTime}
                                    servings={recipe.servings}
                                    ingredients={recipe.ingredients}
                                    handleDelete={() => this.handleDelete({
                                        id: recipe._id
                                    })}
                                    handleReview={() => this.handleReview({
                                        id: recipe._id
                                    })}
                                />
                            ))}
                        </ul>
                    </div>
                </SavedStyle>
            </>
        )
    }
}

export default SavedRecipes;