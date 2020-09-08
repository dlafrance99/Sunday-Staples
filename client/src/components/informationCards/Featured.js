import React from "react";
import styled from "styled-components"

const FeaturedCardStyle = styled.div`
width: 28%;
border: 5px solid;
border-radius: 5px;
padding-bottom: 10px;
float: left;
margin-left: 4%;
margin-bottom: 10px;
text-align: center;
img{
    width: 65%;
    margin-top: 5%;
}

.col-3 {
    max-width: 100%;
}
`

const Featured = (props) => {
    return (
        <>
            <FeaturedCardStyle>
                <p className="cardlist col-3">
                    <h3>{props.name}</h3>
                    <a href={props.link} rel="noopener noreferrer" target="_blank">Link to Recipe</a>
                    <h4>Time: {props.time} | Servings: {props.servings}</h4>
                    <img src={props.image} alt="recipe"></img>
                </p>
            </FeaturedCardStyle>
        </>
    )
}

export default Featured;