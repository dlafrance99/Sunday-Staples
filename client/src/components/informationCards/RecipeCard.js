import React from "react";
import styled from "styled-components"

const RecipeCardstyle = styled.div`
width: 38%;
height: 950px;
background-color: #EDF2F4;
border: 5px solid;
border-radius: 5px;
border-color: #2B2D42;
padding-left: 2vw;
padding-right: 2vw;
padding-bottom: 10px;
float: left;
margin-left: 5%;
margin-bottom: 10px;
img{
    height: 200px;
    width: 200px;
}
.cardlist{
    list-style-type: none;
}
.saveRecButt{
    background-color: transparent;
    margin-top: 22px;
    margin-left: 15%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
}
.revButt{
    background-color: transparent;
    margin-top: 22px;
    margin-left: 5%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
}
`

const RecipeCard = (props) => {

    const button = () => {
        if (props.database) {
            return "Delete From Saved"
        } else if (props.saved) {
            return "Saved!"
        } else {
            return "Save!"
        }
    }

    const reviewbutton = () => {
        if (props.database) {
            return (
                <button
                    onClick={props.handleReview}
                    className="revButt"
                >
                    Review
                </button>
            )
        }
    }

    const addbutton = () => {
        if (props.database) {
            return (
                <button
                    onClick={props.handleAdd}
                    className="revButt"
                >
                    Add to Shopping List
                </button>
            )
        }
    }

    return (
        <>
            <RecipeCardstyle>
                <li className="cardlist">
                    <h3>{props.name}</h3>
                    <a href={props.link} rel="noopener noreferrer" target="_blank">Link to Recipe</a>
                    <h4>Time: {props.time} Servings: {props.servings}</h4>
                    <img src={props.image} alt="recipe"></img>
                    <h4>Ingredients: </h4>
                    <ul>
                        {props.ingredients.map((ingredient, i) => (
                            <li
                            key={i}
                            >{ingredient}</li>
                        ))}
                    </ul>

                    <button
                        onClick={props.saved ? props.handleDelete : props.handlesave}
                        className="saveRecButt">
                        {button(props)}
                    </button>

                    {reviewbutton()}

                    {addbutton()}
                </li>
            </RecipeCardstyle>
        </>
    )
}

export default RecipeCard;