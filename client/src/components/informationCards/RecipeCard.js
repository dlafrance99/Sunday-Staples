import React from "react";
import styled from "styled-components"

const RecipeCardstyle = styled.div`
width: 40%;
height: 650px;
border: 5px solid;
padding-left: 2vw;
padding-bottom: 10px;
float: left;
margin-left: 5%;
img{
    height: 200px;
    width: 200px;
}
.cardlist{
    list-style-type: none;
}
`

const RecipeCard = (props) => {
    return (
        <>
            <RecipeCardstyle>
                <li className="cardlist">
                    <h3>{props.name}</h3>
                    <a href={props.link} target="_blank">Link to Recipe</a>
                    <h4>Time: {props.time} Servings: {props.servings}</h4>
                    <img src={props.image} alt="recipe"></img>
                    <h4>Ingredients: </h4>
                    <ul>
                        {props.ingredients.map(ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                </li>
            </RecipeCardstyle>
        </>
    )
}

export default RecipeCard;