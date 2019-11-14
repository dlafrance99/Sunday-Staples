import React from "react";
import styled from "styled-components"

const List = (props) => {
    return(
        <>
        <div>
            {props.ingredients.map(ingredient => (
                <li>
                    {ingredient}
                    <button onClick={() => props.handleRemove(props.id, ingredient)}>X</button>
                </li>
           ))}
        </div>
        </>
    )
}

export default List;