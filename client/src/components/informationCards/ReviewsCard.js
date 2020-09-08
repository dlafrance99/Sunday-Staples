import React from "react"
import styled from "styled-components"

const ReviewPage = styled.div`
font-family: 'Questrial', sans-serif;
h2{
    font-family: 'Playfair Display', serif;
}
h4{
    margin: 0;
}
.review-content{
    background-color: #A6CFBE;
    padding: 1%;
    border-style: double;
}
.revImage{
    width: 80%;
}
.revComments{
    width: 100%;
}
`

const Reviewcard = (props) => {
    return (
        <>
            <ReviewPage>
                <br />
                <div className="row review-content">
                <div className="col-8">
                    <h4 className=" userName">{props.getUpperCase(props.name)}</h4>
                    <h2 className=" recTitle">{props.title}</h2>
                    <a className=" revlink" href={props.link}>Recipe link</a>
                    <p className=" revRating">Rating: {props.stars}/5</p>
                    <div className="clearfix">
                        <p className="revComments">Comments: {props.comment}</p>
                    </div>
                </div>
                <div className="col-4">
                    <img
                        src={props.image ? (props.image) : (props.default)}
                        alt="review"
                        className="revImage"
                    />
                </div>
                </div>
            </ReviewPage>
        </>
    )
}

export default Reviewcard;