import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

const NavWrapper = styled.div`
background-color: #F1E0C5;
color: black;
height: 60px;
width: 100vw;
text-decoration: none;
.nav-link {
    color: #2B2D42;
    margin-left: 10px;
    position: relative;
    left: 55vw;
    top: -55px;
    font-size: 1.2rem;
    text-decoration: none;
}
h1 {
    margin: 0;
    color: #2B2D42;
    padding: 10px;
    margin-left: 5vw;
    font-family: 'Playfair Display', serif;
    letter-spacing: 1rem;
    font-size: 36;
}
button{
    background-color: transparent;
    border: none;
    outline: none;
}
.searchDropDown{
    width: 115px;
    background-color: #F1E0C5;
    height: 3rem;
    position: absolute;
    top: 37px;
    right: 31vw;
    padding: 10px;
    padding-bottom: 0;
}
.searched{
    color: #2B2D42;
    margin-right:5px;
    text-decoration: none;

}
.DashDropDown{
    width: 115px;
    background-color: #F1E0C5;
    height: 3rem;
    position: absolute;
    top: 37px;
    right: 18.5vw;
    padding: 10px;
    padding-bottom: 0;
}
.Dashed{
    color: #2B2D42;
    margin-right:5px;
    text-decoration: none;

}
`
// I think we should make our nav bar with dropdowns so that Search can include Recipe and Nutrition, Profile could include Login, Register, Saved Recipes and Shopping list and Reviews
// ex. Sunday Staples                   Home | Search | Profile | Reviews


class Nav extends Component {
    state = {
        searchButt: false,
        DashButt: false
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    searchDrop = (event) => {
        event.preventDefault()

        this.setState({ searchButt: true })
    }

    closeMenu = (event) => {
        event.preventDefault();

        this.setState({ searchButt: false })
    }

    dashDrop = (event) => {
        event.preventDefault()

        this.setState({ DashButt: true })
    }

    closeDash = (event) => {
        event.preventDefault();

        this.setState({ DashButt: false })
    }

    render() {
        return (
            <>
                <NavWrapper>
                    <h1>Sunday Staples</h1>
                    <NavLink
                        className="nav-link"
                        to="/home"
                        activeClassName="active"
                        isActive={() => window.location.pathname === "/home" || window.location.pathname === "home"}>
                        Home
                </NavLink>

                    <span className="nav-link">|</span>

                    <button
                        className="nav-link"
                        onMouseEnter={this.searchDrop}
                        onMouseLeave={this.closeMenu}
                    >
                        Search
                </button>

                    {this.state.searchButt ? (
                        <div className="searchDropDown"
                            onMouseEnter={this.searchDrop}
                            onMouseLeave={this.closeMenu}
                        >
                            <NavLink
                                to="/recipe-search"
                                activeClassName="active"
                                className="searched"
                            >
                                Recipe Search
                             </NavLink>

                            <br />

                            <NavLink
                                to="/nutrition-search"
                                activeClassName="active"
                                className="searched"
                            >
                                Nutrition Search
                            </NavLink>
                        </div>

                    ) : (null)}


                    <span className="nav-link">|</span>

                    <NavLink
                        className="nav-link"
                        to="/reviews"
                        activeClassName="active">
                        Reviews
                </NavLink>

                    <span className="nav-link">|</span>

                    <button
                        className="nav-link"
                        onMouseEnter={this.dashDrop}
                        onMouseLeave={this.closeDash}
                    >
                        Dashboard
                </button>

                    {this.state.DashButt ? (
                        <div className="DashDropDown"
                            onMouseEnter={this.dashDrop}
                            onMouseLeave={this.closeDash}
                        >
                            <NavLink
                                to="/saved-recipes"
                                activeClassName="active"
                                className="Dashed"
                            >
                                Saved Recipes
                             </NavLink>

                            <br />

                            <NavLink
                                to="/shopping-list"
                                activeClassName="active"
                                className="Dashed"
                            >
                                Shopping List
                            </NavLink>
                        </div>

                    ) : (null)}

                    <span className="nav-link">|</span>


                    <button
                        style={{
                            width: "100px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        onClick={this.onLogoutClick}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3 nav-link"
                    >
                        Logout
                </button>

                </NavWrapper>
            </>
        )
    }
}

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Nav);