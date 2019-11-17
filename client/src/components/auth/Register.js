import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import styled from "styled-components";

const RegisterStyled = styled.div`
text-align: center;
.SignUp{
  background-color: transparent;
    margin-top: 22px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
}

.main{
  font-size: 24px;
}

.reasons{
  width: 40vw;
  float: left;
  margin-left: 9vw;
  background: #EDF2F4;
  height: 60vw;
  padding-top: 14%;
}

.icon3 {
  background-color: #787986;
}

.iconCard {
  height: 13vw;
  width: 13vw;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin-left: 33%;
  padding: 2% 1% 0;
  color: black;
}

.icon4 {
  background-color: #F0374D;
}

.icon {
  width: 5vw;
  margin-top: 17%;
}

.registerForm {
  width: 40vw;
  height: 60vw;
  float: right;
  margin-right: 10vw;
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
          <div className="row">
            <div className="reasons">
              <h3>Creating an account gives you the ability to</h3>
              <div className="Icons">
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
              <div className="registerForm" style={{ paddingLeft: "11.250px" }}>
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
                  <div style={{ paddingLeft: "11.250px" }}>
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