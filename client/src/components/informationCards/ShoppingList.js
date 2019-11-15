import React from "react";
import styled from "styled-components"

const List = (props) => {
    console.log(props)
    return(
        <>
        <ul>
            {props.ingredients.map(ingredient => (
                <li>
                    {ingredient}
                    <button onClick={() => props.handleRemove(props.id, ingredient)}>X</button>
                </li>
           ))}
        </ul>
        </>
    )
}

export default List;