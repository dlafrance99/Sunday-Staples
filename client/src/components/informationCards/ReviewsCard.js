import React from "react"
import styled from "styled-components"

const ReviewPage = styled.div`
h4{
    margin: 0;
}
.review-content{
    width: 80vw;
    margin-left: 9vw;
    background-color: white;
    padding: 10px;
    border-style: double;
}

`

const Reviewcard = (props) => {
    return (
        <>
            <ReviewPage>
                    <br />
                    <div className="review-content">
                        <h4>{props.name}</h4>
                        <h2 >{props.title}</h2>
                        <a href={props.link}>Recipe link</a>
                        <p>{props.comment}</p>
                        <p>{props.stars}</p>
                    </div>
            </ReviewPage>
        </>
    )
}

export default Reviewcard;