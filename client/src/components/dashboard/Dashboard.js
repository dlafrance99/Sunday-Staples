import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
const Dashboardstyle = styled.div`
text-align: center;
font-family: 'Questrial', sans-serif;
h2{
  font-family: 'Playfair Display', serif;
}

.Icons {
  width: 80vw;
  margin-left: 10vw;
}

.iconCard {
height: 13vw;
width: 13vw;
border-radius: 50%;
display: inline-block;
text-align: center;
margin: 2%;
padding: 2% 1% 0;
color: black;
}

.icon1 {
  background-color: #9BC9B6;
}

.icon2 {
  background-color: #F3E5CF;
}

.icon3 {
  background-color: #787986;
}

.icon4 {
  background-color: #F0374D;
}

.icon {
  width: 5vw;
  margin-top: 17%;
}
`

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log (user)
return (
  <Dashboardstyle>
        <div className="row">
          <div className="col s12 center-align">
            <h2>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into Sunday Staples{" "}
                <span style={{ fontFamily: "monospace" }}></span> 👏
                
              </p>
            </h2>
            <h3>Where to next?</h3>
            <div className="Icons">
                        <Link to="/recipe-search"><p className="iconCard icon1">
                        <img className="icon" src="assets/images/recipe-book.png" alt="recipe icon" />
                        <br/>
                        Search Recipes
                        </p></Link> 
                        <Link to="/nutrition-search"><p className="iconCard icon2">
                        <img className="icon" src="assets/images/plan.png" alt="list icon" />
                        <br/>
                        Search Nutrition
                        </p></Link>
                        <Link to="/saved-recipes"><p className="iconCard icon3">
                        <img className="icon" src="assets/images/fried.png" alt="frying pan icon" />
                        <br/>
                        Save Recipes
                        </p></Link>
                        <Link to="/shopping-list"><p className="iconCard icon4">
                        <img className="icon" src="assets/images/shopping-cart.png" alt="shopping cart icon" />
                        <br/>
                        Create Shopping List
                        </p></Link>
                    </div>

        </div>
      </div>
      </Dashboardstyle>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);