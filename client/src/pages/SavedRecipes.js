import React, { Component } from "react"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"
import styled from "styled-components"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import ReviewModal from "../components/informationCards/ReviewModal"

const SavedStyle = styled.div`
.searchedRecipes{
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
}
`



class SavedRecipes extends Component {

    state = {
        savedRecipes: [],
        user: this.props.auth.user.id,
        showModal: false,
        reviewId: 0,
        comment: "",
        rating: 0
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        this.getSaved(this.state.user);
    }

    getSaved = (user) => {
        API.loadSaved(user)
            .then(res => this.setState({ savedRecipes: res.data }))
            .catch(err => console.log(err))
    }

    handleDelete = id => {
        console.log(id)
        API.deleteSaved(id.id)
            .then(res => this.getSaved())
            .catch(err => console.log(err))
    }

    handleReview = recipe => {
        this.setState({ reviewId: recipe })
        this.showModal()
    }

    showModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    saveRev = review => {
        console.log(review)
        API.saveReview(review)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    render() {
        //  console.log(this.props.auth.user.id)
        return (
            <>
                <SavedStyle>
                    <div className="searchedRecipes">
                        <ul>
                            {this.state.savedRecipes.map(recipe => (
                                <RecipeCard
                                    key={recipe.url}
                                    database={true}
                                    saved={true}
                                    name={recipe.title}
                                    link={recipe.url}
                                    image={recipe.image}
                                    time={recipe.totalTime}
                                    servings={recipe.servings}
                                    ingredients={recipe.ingredients}
                                    handleDelete={() => this.handleDelete({
                                        id: recipe._id
                                    })}
                                    handleReview={() => this.handleReview({
                                        id: recipe._id,
                                        name: recipe.title,
                                        url: recipe.url
                                    })}
                                />
                            ))}

                            <ReviewModal
                                show={this.state.showModal}
                                handleClose={() => this.closeModal()}
                                id={this.state.reviewId}
                                handleInputChange={this.handleInputChange}
                                comment={this.state.comment}
                                rating={this.state.rating}
                                saveRev={() => this.saveRev({
                                    name: this.state.reviewId.name,
                                    link: this.state.reviewId.url,
                                    id: this.state.reviewId.id,
                                    comment: this.state.comment,
                                    rating: this.state.rating
                                })}
                            >
                            </ReviewModal>

                        </ul>
                    </div>
                </SavedStyle>
                <ReviewModal
                    createReview={this.createReview}
                />
            </>
        )
    }
}

SavedRecipes.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(SavedRecipes);
