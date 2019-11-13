import React, { Component } from "react";
import styled from "styled-components";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

const ShopList = styled.div`
.myShoppingList{
    width: 35vw;
    margin-left: 10vw;
    margin-top: 20px;
    border: 5px solid;
    padding: 10px;
    float: left;
}
h3{
    margin: 0;
}
hr{
    width: 90%;
    border-color: black;
}
.pastShoppingList{
    float: left;
    width: 35vw;
    margin-left: 10vw;
    margin-top: 20px;
    border: 5px solid;
    padding: 10px;
    background-color: #b3e6ca;
}
.ingredientButtons {
    background-color: transparent;
}
`


class ShoppingList extends Component {
    state = {
        currentList: [],
        previousLists: [],
        user: this.props.auth.user.id  
    }

    componentDidMount() {
        this.getCurrent(this.state.user);
        this.getPrevious(this.state.user);
    }

    getCurrent = (user) => {
        API.findCurrentList(user)
            .then(res => this.setState({ currentList: res.data }))
            .catch(err => console.log(err))
    }

    getPrevious = (user) => {
        API.findCurrentList(user)
            .then(res => this.setState({ previousLists: res.data }))
            .catch(err => console.log(err))
    }

    render() {
     console.log(this.props.auth.user.id)

    return (
        <>
        <ShopList>
            <div className="myShoppingList">
                <h3>My Shopping List:</h3>
                <hr />
                <h5>Item to Add:</h5>
                <input type="text"></input>
                <button className="ingredientButtons">Add Item</button>
                <br />
                <button className="ingredientButtons">Done</button>
            </div>

            <div className="pastShoppingList">
                <h3>Past Shopping List:</h3>
                <hr />
            </div>
        </ShopList>
        </>
    )
}
}

ShoppingList.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(ShoppingList);