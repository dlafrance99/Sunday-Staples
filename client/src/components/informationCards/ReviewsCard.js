import React from "react"
import styled from "styled-components"

const ReviewPage = styled.div`

h4{
    margin: 0;
}
.review-content{
    width: 80vw;
    margin-left: 9vw;
    min-height: 260px;
    background-color: white;
    padding: 10px;
    border-style: double;
    margin-top: 5px;
    margin-bottom: 5px;
}
.revImage{
    height: 250px;
    width: 250px;
    object-fit: contain;
}

`

const Reviewcard = (props) => {
    return (
        <>
            <ReviewPage>
                <br />
                <div className="review-content">
                    <h4 className=" userName">{props.name}</h4>
                    <h2 className=" recTitle">{props.title}</h2>
                    <a className=" revlink" href={props.link}>Recipe link</a>
                    <p className=" revRating">Rating: {props.stars}/5</p>
                    <p className="">Comments: {props.comment}</p>
                    <img
                        src={props.image ? (props.image) : (props.default)}
                        alt="review"
                        className="revImage"
                    />
                </div>
            </ReviewPage>
        </>
    )
}

export default Reviewcard;