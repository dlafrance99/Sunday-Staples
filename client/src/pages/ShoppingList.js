import React, { Component } from "react";
import dateFormat from "dateformat";
import styled from "styled-components";
import API from "../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import List from "../components/informationCards/ShoppingList"

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
const StyledListItem = styled.ul`
    display: ${props => props.show ? 'block' : 'none'};
`


class ShoppingList extends Component {
    state = {
        currentList: { 
            id: "",
            ingredients: [],
            complete: ""
        },
        previousLists: [],
        user: this.props.auth.user.id,
        added: "",
        showPrev: false
        }

    componentDidMount() {
        this.getCurrent(this.state.user);
        this.getPrevious(this.state.user);
    };
    
    test = (e) => {this.setState({showPrev: true})}

    getCurrent = (user) => {
        API.getCurrent(user)
            .then(res => this.setState({currentList: {
               id: res.data[0]._id,
               ingredients: res.data[0].ingredients,
               complete: res.data[0].complete
            }}))
            .catch(err => console.log(err))
    };

    getPrevious = (user) => {
        API.getPrevious(user)
            .then(res => this.setState({ previousLists: res.data }))
            .catch(err => console.log(err))
    };

    completeList = (id) => {
        API.completeList(id)
            .then(res => this.getCurrent(this.state.user))
            .catch(err => console.log(err))

    };

    handleInputChange = event => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    
        if (this.state.currentList.ingredients.length === 0){
            API.createShoppingList({
                user: this.state.user,
                ingredients: this.state.added
            })
              .then(res => this.setState({ currentList: res.data }))
              .then(this.setState({added: ""}))
              .catch(err => console.log(err))
        } else {
            API.addIngredients({
                id: this.state.currentList.id,
                ingredients: this.state.added
            })
            .then(res => this.setState({ currentList: res.data }))
            .then(this.setState({added: ""}))
            .catch(err => console.log(err))
        }
    };

    handleRemove = (user, item) => {
        API.deleteIngredient(user, item)
            .then(res => this.getCurrent(this.state.user))
            .catch(err => console.log(err))
    }

    render() {
      console.log(this.props.auth.user.id)
      console.log(this.state.currentList.ingredients)
      
    return (
        <>
        <ShopList>
            <div className="myShoppingList">
                <h3>My Shopping List:</h3>
                <List
                id={this.state.currentList.id}
                handleRemove={this.handleRemove}
                ingredients= {this.state.currentList.ingredients}
                />
                <h5>Item to Add:</h5>
                <input
                value={this.state.added}
                name="added"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Apples"
                ></input>
                <button className="ingredientButtons" onClick={this.handleFormSubmit} >Add Item</button>
                <br />
                <button 
                className="ingredientButtons"
                onClick={() => this.completeList(this.state.currentList.id)}
                >
                    Done
                </button>
            </div>

            <div className="pastShoppingList">
                <h3>Past Shopping List:</h3>
                {this.state.previousLists.map(list =>
                <ul key={list._id}>
                    <li>
                        <button onClick={this.test}>{dateFormat(list.date, "mm/dd/yyyy")}</button> 
                        <StyledListItem show={this.state.showPrev} >
                        {list.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                        </StyledListItem>
                    </li>
                </ul>
                    
                    )}
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