import React from "react"
import styled from "styled-components"

const ShopList = styled.div`
.myShoppingList{
    width: 35vw;
    margin-left: 10vw;
    margin-top: 20px;
    border: 5px solid;
    padding: 10px;
    float: left;
}
h3{
    margin: 0;
}
hr{
    width: 90%;
    border-color: black;
}
.pastShoppingList{
    float: left;
    width: 35vw;
    margin-left: 10vw;
    margin-top: 20px;
    border: 5px solid;
    padding: 10px;
    background-color: #b3e6ca;
}
.ingredientButtons {
    background-color: transparent;
}
`

const ShoppingList = () => {
    return (
        <>
        <ShopList>
            <div className="myShoppingList">
                <h3>My Shopping List:</h3>
                <hr />
                <h5>Item to Add:</h5>
                <input type="text"></input>
                <button className="ingredientButtons">Add Item</button>
                <br />
                <button className="ingredientButtons">Done</button>
            </div>

            <div className="pastShoppingList">
                <h3>Past Shopping List:</h3>
                <hr />
            </div>
        </ShopList>
        </>
    )
}

export default ShoppingList;