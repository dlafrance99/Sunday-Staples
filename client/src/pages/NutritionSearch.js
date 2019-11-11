import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NutSearch = styled.div`
h1{
    margin: 0;
}
.search-instructions{
    background-color: #9fdfbc;
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
    padding: 10px;
}
.searchDiv{
    background-color: #F8F8F8;
    width: 80vw;
    margin-left: 10vw;
    padding: 10px;
    text-align: center;
}
.searchInput{
    margin: 5px;
    border-radius: 5px;
    border-color: #d3d3d3;
}
.searchButton{
    border-radius: 5px;
}
.NutritionalTable{
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
}
.nut-table{
    width: 100%;

}
.tablehead{
    margin: 10px;
}

`

const NutritionSearch = () => {
    return (
        <>
            <NutSearch>
                <div className="search-instructions">
                    <h1>
                        Nutrition Search
                       </h1>
                    <p>
                        Search any ingredient or food to get the basic nutrition values. The quantity search is based on grams--don't worry if you can't calculate grams in your head, a good rule of thumb is between 100 to 200 grams for a serving size of most food. Here is a detailed resource for calculating to grams per serving if you want to stay accurate: <a href="https://healthyeating.sfgate.com/convert-food-serving-sizes-grams-8494.html" target="_blank">Calculate Grams Per Serving</a>
                    </p>
                </div>

                <div className="searchDiv">
                    Search Ingredient:
                        <input type="text" className="searchInput" placeholder="e.g spinach"></input>
                        <input type="text" className="searchInput" placeholder ="qty must be in grams"></input>
                    <button type="search" className="searchButton">Search</button>
                </div>

                <div className="NutritionalTable">
                    <table className="nut-table">
                        <tr>
                            <th className="tablehead">Quantity</th>
                            <th className="tablehead">Units</th>
                            <th className="tablehead">Food</th>
                            <th className="tablehead">Energy</th>
                            <th className="tablehead">Nutrients</th>
                        </tr>
                        
                    </table>
                </div>
            </NutSearch>
        </>
    )
}

export default NutritionSearch;