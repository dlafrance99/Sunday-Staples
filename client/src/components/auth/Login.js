import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import styled from "styled-components";

const LoginStyled = styled.div`
text-align: center;
font-family: 'Questrial', sans-serif;
.main{
    font-size: 24px;
    font-family: 'Playfair Display', serif;
}
h3{
    font-family: 'Playfair Display', serif;
}
a {
    text-decoration: none;
}
.loginButt{
    background-color: transparent;
    margin-top: 22px;
    margin-left: 5%;
    border: 2px solid black;
    border-radius: 5px;
}
.loginForm {
    float: left;
    background: #D2E7DE;
    padding-top: 18%;
    height: 100%;
  }

input {
    border: none;
    border-bottom: solid #9BC9B6 1px;
    background: #E8F3EE;
    width: 26vw;
    height: 3vw;
}
.goTo{
    float: right;
    background: #EDF2F4;
    padding-top: 12%;
    height: 100%;
  }
.icon3 {
    background-color: #787986;
  }
  
.iconCard {
    height: 14rem;
    width: 95%;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    margin: 6% 2.4% 0;
    padding: 11% 9% 0;
    color: black;
}
  
.icon4 {
    background-color: #F0374D;
  }
  
.icon {
    width: 5rem;
    margin-top: 18%;
}
}
  .section{
      height: 100vh;
  }
`

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };

    render() {
        const { errors } = this.state;

        return (
            <LoginStyled>
                <div className="container">
                    <div className="row section">
                        <div className="loginForm col-6">
                            <div>
                            <p className="main"><b>Log in</b> below</p>
                                <p className="grey-text text-darken-1">
                                    Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </div>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field">
                                    <label htmlFor="email"></label>
                                    <input
                                        placeholder="Email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        className={classnames("", {
                                            invalid: errors.email || errors.emailnotfound
                                        })}
                                    />
                                    <span className="red-text">
                                        {errors.email}
                                        {errors.emailnotfound}
                                    </span>
                                </div>
                                <br/>
                                <div className="input-field">
                                    <label htmlFor="password"></label>
                                    <input
                                        placeholder="Password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        className={classnames("", {
                                            invalid: errors.password || errors.passwordincorrect
                                        })}
                                    />
                                    <span className="red-text">
                                        {errors.password}
                                        {errors.passwordincorrect}
                                    </span>
                                </div>
                                <div>
                                    <button
                                        style={{
                                            width: "150px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            marginTop: "1rem"
                                        }}
                                        type="submit"
                                        className="btn btn-large waves-effect waves-light hoverable blue accent-3 loginButt"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="goTo col-6">
                            <div className="row">
                            <h3 className="col-12">Log in to view</h3>
                            </div>
                            <div className="Icons row">
                            <div className="col-6">
                            <Link to="/saved-recipes"><p className="iconCard icon3">
                                <img className="icon" src="assets/images/fried.png" alt="frying pan icon" />
                                <br/>
                                Saved Recipes
                            </p></Link>
                            </div>
                            <div className="col-6">
                            <Link to="/shopping-list"><p className="iconCard icon4">
                                <img className="icon" src="assets/images/shopping-cart.png" alt="shopping cart icon" />
                                <br/>
                                Shopping List
                            </p></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoginStyled>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
