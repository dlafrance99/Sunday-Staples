import React from "react"
import styled from "styled-components"

const ReviewPage = styled.div`
font-family: 'Questrial', sans-serif;
.clearfix::after{
    content:"";
    clear: both;
    display: block;
}
h2{
    font-family: 'Playfair Display', serif;
}
h4{
    margin: 0;
}
.review-content{
    width: 80vw;
    margin-left: 9vw;
    min-height: 260px;
    background-color: #A6CFBE;
    padding: 10px;
    border-style: double;
    margin-top: 5px;
    margin-bottom: 5px;
}
.revImage{
    height: 250px;
    width: 250px;
    object-fit: contain;
    float: right;
    position: relative;
    right: 50px;
}
.revComments{
    width: 650px;
    float: left;
}
`

const Reviewcard = (props) => {
    return (
        <>
            <ReviewPage>
                <br />
                <div className="review-content">
                    <img
                        src={props.image ? (props.image) : (props.default)}
                        alt="review"
                        className="revImage"
                    />
                    <h4 className=" userName">{props.getUpperCase(props.name)}</h4>
                    <h2 className=" recTitle">{props.title}</h2>
                    <a className=" revlink" href={props.link}>Recipe link</a>
                    <p className=" revRating">Rating: {props.stars}/5</p>
                    <div className="clearfix">
                        <p className="revComments">Comments: {props.comment}</p>
                    </div>
                </div>
            </ReviewPage>
        </>
    )
}

export default Reviewcard;