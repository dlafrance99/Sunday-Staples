import React from "react"
import {Link, NavLink} from "react-router-dom"
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

const Nav = () => {
    return(
        <>
            <NavWrapper>
                <h1>Sunday Staples</h1>
                <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                isActive = {()=> window.location.pathname === "/" || window.location.pathname === "Home"}>
                    Home
                </NavLink>

                <span className="nav-link">|</span>
                
                <NavLink
                className="nav-link"
                to="/RecipeSearch"
                activeClassName="active">
                    Recipe Search
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/NutritionSearch"
                activeClassName="active">
                    Nutrition Search
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/SavedRecipes"
                activeClassName="active">
                    Saved Recipes
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/ShoppingList"
                activeClassName="active">
                    Shopping List
                </NavLink>

                <span className="nav-link">|</span>

                <NavLink
                className="nav-link"
                to="/Reviews"
                activeClassName="active">
                    Reviews
                </NavLink>

            </NavWrapper>
        </>
    )
}

export default Nav;