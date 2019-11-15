import React from "react"
import styled from "styled-components"

const NutCardstyle = styled.div`
.nutList{
    list-style-type: none;
}
`

const NutritionCard = (props) => {
    return (
        <>
            <tr>
                <td>{props.quantity}</td>
                <td>grams</td>
                <td>{props.food}</td>
                <td>{((props.quantity / 100) * props.energy).toFixed(2)} kCal</td>
                <td>
                    <NutCardstyle>
                    <ul className="nutList">
                        <li>Fat: {((props.quantity / 100) * props.fat).toFixed(2)} g</li>
                        <li>Dietary Fiber: {((props.quantity / 100) * props.fiber).toFixed(2)} g</li>
                        <li>Protein: {((props.quantity / 100) * props.protein).toFixed(2)} g</li>
                        <li>Carb: {((props.quantity / 100) * props.carb).toFixed(2)} g</li>
                    </ul>
                    </NutCardstyle>
                </td>
            </tr>
        </>
    )
}

export default NutritionCard;