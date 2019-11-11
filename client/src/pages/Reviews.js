import React from "react";
import styled from "styled-components";

const ReviewPage = styled.div`
.Review-wrapper{
    background-color: #b3e6ca;
    width: 100vw;
    height: 100vh;
}
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

const Reviews = () => {
    return (
        <>
            <ReviewPage>

                <div className="Review-wrapper">
                    <br />
                    <div className="review-content">
                        <h4>Name Here</h4>
                        <h2 >Recipe Name here</h2>
                        <a>Recipe link here</a>
                        <p>Review here</p>
                        <p>Star count here</p>
                    </div>
                </div>
            </ReviewPage>
        </>

    )
}

export default Reviews;