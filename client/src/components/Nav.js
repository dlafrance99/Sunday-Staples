import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

const NavWrapper = styled.div`
font-family: 'Playfair Display', serif;
color: black;
height: 60px;
text-decoration: none;
`
class Nav extends Component {
    state = {
        searchButt: false,
        DashButt: false,
        loginButt: false
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <>
                <NavWrapper>
                <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <h1 class="navbar-brand">Sunday Staples</h1>
                    
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                    <NavLink
                        to="/home"
                        activeClassName="active"
                        isActive={() => window.location.pathname === "/home" || window.location.pathname === "home"}
                        className="nav-link"
                        >
                        Home
                    </NavLink> 
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Search
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink
                            to="/recipe-search"
                            activeClassName="active"
                            className="dropdown-item"
                        >
                        Recipe Search
                        </NavLink>
                        <NavLink
                            to="/nutrition-search"
                            activeClassName="active"
                            className="dropdown-item"
                        >
                        Nutrition Search
                         </NavLink>
                        </div>
                    </li>
                    <li class="nav-item">
                        <NavLink
                            to="/reviews"
                            activeClassName="active"
                            className="nav-link"
                            >
                            Reviews
                        </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dashboard
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink
                            to="/saved-recipes"
                            activeClassName="active"
                            className="dropdown-item"
                            >
                            Saved Recipes
                        </NavLink>
                        <NavLink
                            to="/shopping-list"
                            activeClassName="active"
                            className="dropdown-item"
                            >
                            Shopping List
                        </NavLink>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Log In
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink
                            to="/login"
                            activeClassName="active"
                            className="Log dropdown-item"
                            >
                            Log in
                        </NavLink>
                        <NavLink
                            to="/register"
                            activeClassName="active"
                            className="Log dropdown-item"
                            >
                            Register
                        </NavLink>
                        <Link to="/login"
                            onClick={this.onLogoutClick}
                            className="Log dropdown-item">
                            Logout
                        </Link>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
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