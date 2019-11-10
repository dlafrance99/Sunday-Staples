import React from "react"
import { NavLink} from "react-router-dom"
import styled from "styled-components"

const NavWrapper = styled.div`
background-color: #d9d9d9;
color: black;
height: 60px;
width: 100vw;
.nav-link {
    color: #006666;
    margin-left: 10px;
    position: relative;
    left: 44vw;
    top: -40px;
    font-size: 1.2rem;
}
h1 {
    margin: 0;
    padding: 10px;
    margin-left: 5vw;
    font-family: 'Playfair Display', serif;
    letter-spacing: 1rem;
    font-size: 36;
}
`
// I think we should make our nav bar with dropdowns so that Search can include Recipe and Nutrition, Profile could include Login, Register, Saved Recipes and Shopping list and Reviews
// ex. Sunday Staples                   Home | Search | Profile | Reviews
const Nav = () => {
    return(
        <>
            <NavWrapper>
                <h1>Sunday Staples</h1>
                <NavLink
                className="nav-link"
                to="/home"
                activeClassName="active"
                isActive = {()=> window.location.pathname === "/home" || window.location.pathname === "home"}>
                    Home
                </NavLink>

                <span className="nav-link">|</span>
                
                <NavLink
                className="nav-link"
                to="/recipe-search"
                activeClassName="active">
                    Recipe Search
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/nutrition-search"
                activeClassName="active">
                    Nutrition Search
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/saved-recipes"
                activeClassName="active">
                    Saved Recipes
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/shopping-list"
                activeClassName="active">
                    Shopping List
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/reviews"
                activeClassName="active">
                    Reviews
                </NavLink>

            </NavWrapper>
        </>
    )
}

export default Nav;