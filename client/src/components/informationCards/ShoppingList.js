import React from "react";
import styled from "styled-components"

const ShopMapStyle = styled.div`
.ingredientDelete{
    color: red;
    background-color: transparent;
    margin-left: 10px;
    margin-top: 2px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
}
`

const List = (props) => {
    console.log(props)
    return (
        <>
            <ShopMapStyle>
                <ul>
                    {props.ingredients.map(ingredient => (
                        <li>
                            {ingredient}
                            <button className="ingredientDelete" onClick={() => props.handleRemove(props.id, ingredient)}>X</button>
                        </li>
                    ))}
                </ul>
            </ShopMapStyle>
        </>
    )
}

export default List;