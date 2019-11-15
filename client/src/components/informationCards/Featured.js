import React from "react";
import styled from "styled-components"

const FeaturedCardStyle = styled.div`
width: 28%;
height: 310px;
border: 5px solid;
border-radius: 5px;
padding-bottom: 10px;
float: left;
margin-left: 3%;
margin-bottom: 10px;
text-align: center;
img{
    height: 200px;
    width: 200px;
    margin: 5%;
}
`

const Featured = (props) => {
    return (
        <>
            <FeaturedCardStyle>
                <p className="cardlist">
                    <h3>{props.name}</h3>
                    <a href={props.link} rel="noopener noreferrer" target="_blank">Link to Recipe</a>
                    <h4>Time: {props.time} Servings: {props.servings}</h4>
                    <img src={props.image} alt="recipe"></img>
                </p>
            </FeaturedCardStyle>
        </>
    )
}

export default Featured;