import React, { Component } from "react";
import styled from "styled-components";
import API from "../utils/API";
import Reviewcard from "../components/informationCards/ReviewsCard"

const Reviewstyle = styled.div`
background-color: #EDF2F4;
`


class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        this.getReviews()
    }

    getReviews = () => {
        API.loadReviews()
            .then(res => this.setState({ reviews: res.data }))
            .catch(err => console.log(err))
    }

    getUpperCase = (str) => {
        str = str.replace(/\s+/g, '');
        const sL = str.length;
        let newStr = ""

        for (let i = 0; i < sL-1; i++) {
            if (str.charAt(i) === str.charAt(i).toUpperCase()) {
                newStr = newStr + str.charAt(i) + "."
            }
        }
        return (newStr)

    }

    render() {

        return (
            <>
                <Reviewstyle>
                    {this.state.reviews.map(review => (
                        <Reviewcard
                            name={review.alias}
                            title={review.title}
                            link={review.url}
                            comment={review.comment}
                            stars={review.stars}
                            image={review.image}
                            default={review.defaultImage}
                            getUpperCase={this.getUpperCase}
                        />
                    ))}
                    <br />
                </Reviewstyle>
            </>

        )
    }
}

export default Reviews;