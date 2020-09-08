import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import styled from "styled-components";

const RegisterStyled = styled.div`
text-align: center;
font-family: 'Questrial', sans-serif;
.SignUp{
  background-color: transparent;
  margin-top: 22px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 3px;
}
a {
  text-decoration: none;
}

.main{
  font-size: 24px;
  font-family: 'Playfair Display', serif;
}

.reasons{
  height: 100%;
  float: left;
  background: #EDF2F4;
  padding-top: 20%;
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

.registerForm {
  height: 100%;
  float: right;
  background: #D2E7DE;
  padding-top: 12%;
}

input {
  border: none;
  border-bottom: solid #9BC9B6 1px;
  background: #E8F3EE;
  width: 26vw;
  height: 3vw;
}
.section{
  height: 100vh;
}
`

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <RegisterStyled>
        <div className="container">
          <div className="row section">
            <div className="reasons col-6">
              <h3>Creating an account gives you the ability to</h3>
              <div className="Icons row">
              <div className="col-6">
                            <Link><p className="iconCard icon3">
                                <img className="icon" src="assets/images/fried.png" alt="frying pan icon" />
                                <br/>
                                Save Recipes
                            </p></Link>
                            </div>
                            <div className="col-6">
                            <Link><p className="iconCard icon4">
                                <img className="icon" src="assets/images/shopping-cart.png" alt="shopping cart icon" />
                                <br/>
                                Create Shopping List
                            </p></Link>
                            </div>
              </div>
            </div>
              <div className="registerForm col-6">
                <p className="main"><b>Register</b> below</p>
                <p className="grey-text text-darken-1">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field">
                    <label htmlFor="name"></label>
                    <input
                      placeholder="Name"
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <br/>
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
                        invalid: errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
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
                        invalid: errors.password
                      })}
                    />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <br/>
                  <div className="input-field">
                    <label htmlFor="password2"></label>
                    <input
                      placeholder="Confirm Password"
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2
                      })}
                    />
                    <span className="red-text">{errors.password2}</span>
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
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3 SignUp"
                    >
                      Sign up
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </RegisterStyled>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));