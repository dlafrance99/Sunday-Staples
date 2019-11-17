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
width: 150vw;
text-decoration: none;
.nav-link {
    color: #2B2D42;
    position: relative;
    left: 45vw;
    top: -55px;
    font-size: 1.2rem;
    text-decoration: none;
    border-left: solid;
    padding-left: 38px;
    padding-right: 38px;
    font-weight: bold;   
}
.home-link {
    color: #2B2D42;
    margin-left: 10px;
    position: relative;
    left: 45vw;
    top: -55px;
    font-size: 1.2rem;
    text-decoration: none;
    padding-right: 25px;
    padding-left: 25px;
    font-weight: bold;
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
    position: relative;
    left: 45vw;
    top: -60px;
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
    position: relative;
    left: 46vw;
    top: -60px;
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

                    <table>
                        <tr>
                            <th>
                                <NavLink
                                    to="/home"
                                    activeClassName="active"
                                    isActive={() => window.location.pathname === "/home" || window.location.pathname === "home"}
                                    className="home-link"
                                >
                                    Home
                                </NavLink>
                            </th>
                            <th>
                                <button
                                    onMouseEnter={this.searchDrop}
                                    onMouseLeave={this.closeMenu}
                                    className="nav-link search"
                                >
                                    Search
                                 </button>
                            </th>
                            <th>
                                <NavLink
                                    to="/reviews"
                                    activeClassName="active"
                                    className="nav-link"
                                >
                                    Reviews
                                 </NavLink>
                            </th>
                            <th>
                                <button
                                    onMouseEnter={this.dashDrop}
                                    onMouseLeave={this.closeDash}
                                    className="nav-link"
                                >
                                    Dashboard
                                 </button>
                            </th>
                            <th>
                                <button
                                    style={{
                                        width: "100px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                    }}
                                    onClick={this.onLogoutClick}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3 nav-link"
                                >
                                    Logout
                                 </button>
                            </th>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
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
                            </td>
                            <td>

                            </td>
                            <td>
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
                            </td>
                            <td>

                            </td>
                        </tr>
                    </table>

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