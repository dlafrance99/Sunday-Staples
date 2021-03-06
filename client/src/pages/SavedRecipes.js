import React, { Component } from "react"
import API from "../utils/API"
import RecipeCard from "../components/informationCards/RecipeCard"
import styled from "styled-components"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import ReviewModal from "../components/informationCards/ReviewModal"
import { uploadFile } from 'react-s3';
import AddedModal from "../components/informationCards/AddedModal"


const SavedStyle = styled.div`
.searchedRecipes{
    width: 80vw;
    margin-left: 10vw;
    margin-top: 10px;
}
`
const config = {
    bucketName: 'sunday-staples',
    dirName: 'photos', /* optional */
    region: 'us-east-2',
    accessKeyId: process.env.REACT_APP_ACCESSKEY,
    secretAccessKey: process.env.REACT_APP_SECRETKEY
}

class SavedRecipes extends Component {

    state = {
        savedRecipes: [],
        currentList: {},
        user: this.props.auth.user.id,
        showModal: false,
        showAdded: false,
        reviewId: {},
        comment: "",
        rating: 0,
        imagelink: ""
    }

    upload = e => {
        console.log(process.env.REACT_APP_ACCESSKEY)
        console.log(process.env.REACT_APP_SECRETKEY)
        console.log(e.target.files[0])
        uploadFile(e.target.files[0], config)
            .then(res => this.setState({ imagelink: res.location }))
            .catch(err => console.log(err))
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    componentDidMount() {
        this.getSaved(this.state.user)
        this.getCurrent(this.state.user);
    }

    getSaved = (user) => {
        API.loadSaved(user)
            .then(res => this.setState({ savedRecipes: res.data }))
            .catch(err => console.log(err))
    }

    getCurrent = (user) => {
        API.getCurrent(user)
            .then(res => this.setState({ currentList: res.data }))
            .catch(err => console.log(err))
    }

    handleDelete = id => {
        console.log(id)
        API.deleteSaved(id.id)
            .then(res => this.getSaved(this.state.user))
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

    showAdded = () => {
        console.log(`hit this`)
        this.setState({ showAdded: true })
        setTimeout(() => { this.setState({ showAdded: false }) }, 2000);
    }

    handleAdd = info => {

        if (this.state.currentList.length === 0) {
            API.createShoppingList(info)
                .then(res => {
                    this.setState({ currentList: res.data })
                    this.showAdded()
                    this.getCurrent(this.state.user)
                })
                .catch(err => console.log(err))
        } else {
            API.addIngredients(info)
                .then(res => {
                    this.setState({ currentList: res.data })
                    this.showAdded()
                    this.getCurrent(this.state.user)
                })
                .catch(err => console.log(err))
        }
    }


    saveRev = review => {
        console.log(review)
        API.saveReview(review)
            .then(res => this.closeModal())
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
                                        url: recipe.url,
                                        defaultImage: recipe.image
                                    })}
                                    handleAdd={() => this.handleAdd({
                                        user: this.props.auth.user.id,
                                        ingredients: recipe.ingredients,
                                        id: this.state.currentList.length === 1 ? this.state.currentList[0]._id : null
                                    })}
                                />
                            ))}

                            <ReviewModal
                                show={this.state.showModal}
                                handleClose={() => this.closeModal()}
                                name={this.state.reviewId.name}
                                handleInputChange={this.handleInputChange}
                                comment={this.state.comment}
                                upload={this.upload}
                                rating={this.state.rating}
                                imageLink={this.state.imagelink}
                                saveRev={() => this.saveRev({
                                    user: this.props.auth.user.id,
                                    alias: this.props.auth.user.name,
                                    title: this.state.reviewId.name,
                                    url: this.state.reviewId.url,
                                    comment: this.state.comment,
                                    stars: this.state.rating,
                                    image: this.state.imagelink,
                                    defaultImage: this.state.reviewId.defaultImage
                                })}
                            >
                            </ReviewModal>


                        </ul>
                    </div>
                    <AddedModal
                        added={this.state.showAdded}
                    >
                    </AddedModal>
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
