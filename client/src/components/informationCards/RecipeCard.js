import React from "react";
import styled from "styled-components"

const RecipeCardstyle = styled.div`
font-family: 'Questrial',sans-serif;
width: 45%;
background-color: #EDF2F4;
border: 5px solid;
border-radius: 5px;
border-color: #2B2D42;
padding-left: 2%;
padding-right: 2%;
padding-bottom: 1%;
float: left;
margin-left: 2%;
margin-bottom: 2%;
.col-6 {
    max-width: 100%;
}
h3, h4{
    font-family: 'Playfair Display', serif;
}
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
.addButt{
    float: right;
    background-color: transparent;
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
                    className="addButt"
                >
                    Add to Shopping List
                </button>
            )
        }
    }



    return (
        <>
            <RecipeCardstyle>
                <li className="cardlist col-6">
                    <h3>{props.name}</h3>{addbutton()}
                    <a href={props.link} rel="noopener noreferrer" target="_blank">Link to Recipe</a>
                    <h4>Time: {props.time} | Servings: {props.servings}</h4>
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

                    

                </li>
            </RecipeCardstyle>
        </>
    )
}

export default RecipeCard;