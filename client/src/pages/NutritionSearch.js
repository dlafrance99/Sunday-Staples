import React, { Component } from "react"
import styled from "styled-components"
import API from "../utils/API"
import NutritionCard from "../components/informationCards/NutritionCard"

const NutSearch = styled.div`
font-family: 'Questrial', sans-serif;
h1{
    margin: 0;
    font-family: 'Playfair Display', serif;
}
}
.search-instructions{
    background-color: #EF233C;
    padding: 10px;
    margin-top: 1%;
}
.searchDiv{
    background-color: #EDF2F4;

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
.nut-table{
    width: 100%;
}
.tablehead{
    margin: 2%
    padding: 2%;
}
`

class NutritionSearch extends Component {
    state = {
        ingredient: "",
        quantity: "",
        nutrition: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.ingredient) {
            API.getNutrition(this.state.ingredient)
                .then(res => this.setState({ nutrition: res.data.hints }))
                .catch(err => console.log(err))
        }
    }


    render() {

        return (
            <>
                <NutSearch>
                <div className="container">
                    <div className="row">
                    <section className="col-12">
                    <div className="search-instructions">
                        <h1>
                            Nutrition Search
                       </h1>
                        <p>
                            Search any ingredient or food to get the basic nutrition values. The quantity search is based on grams--don't worry if you can't calculate grams in your head, a good rule of thumb is between 100 to 200 grams for a serving size of most food. Here is a detailed resource for calculating to grams per serving if you want to stay accurate: <a href="https://healthyeating.sfgate.com/convert-food-serving-sizes-grams-8494.html" rel="noopener noreferrer" target="_blank">Calculate Grams Per Serving</a>
                        </p>
                    </div>

                    <div className="searchDiv">
                        Search Ingredient:
                        <input
                            value={this.state.ingredient}
                            onChange={this.handleInputChange}
                            name="ingredient"
                            placeholder="e.g spinach"
                        />

                        <input
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            name="quantity"
                            className="searchInput"
                            placeholder="qty must be in grams"
                        />

                        <button
                            onClick={this.handleFormSubmit}
                            className="searchButton"
                        >
                            Search
                         </button>
                    </div>
                    </section>
                    </div>
                    <div className="NutritionalTable row">
                        <table className="nut-table col-12">
                            <tr>
                                <th className="tablehead">Quantity</th>
                                <th className="tablehead">Units</th>
                                <th className="tablehead">Food</th>
                                <th className="tablehead">Energy</th>
                                <th className="tablehead">Nutrients</th>
                            </tr>
                            <tbody>

                                {this.state.nutrition.slice(0, 5).map((info, i) => (
                                    <NutritionCard
                                        className="nutCard"
                                        food={info.food.label}
                                        key={i}
                                        quantity={this.state.quantity}
                                        energy={info.food.nutrients.ENERC_KCAL}
                                        fat={info.food.nutrients.FAT}
                                        fiber={info.food.nutrients.FIBTG}
                                        protein={info.food.nutrients.PROCNT}
                                        carb={info.food.nutrients.CHOCDF}
                                    />
                                ))}

                            </tbody>
                        </table>
                    </div>
                    </div>
                </NutSearch>
            </>
        )
    }
}

export default NutritionSearch;