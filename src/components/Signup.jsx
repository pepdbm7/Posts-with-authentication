import React, { Component, Fragment } from "react";
import { PostData } from "../services/postdata";
import { Redirect } from "react-router-dom";
class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    redirectToReferrer: false
  };

  signup() {
    if (
      this.state.username &&
      this.state.password &&
      this.state.email &&
      this.state.name
    ) {
      PostData("signup", this.state)
        .then(result => {
          let responseJson = result;
          if (responseJson.userData) {
            sessionStorage.setItem("userData", JSON.stringify(responseJson));
            this.setState({ redirectToReferrer: true });
          }
        })
        .catch(err => console.log(err));
    }
  }

  onChange = e => {
    console.log({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <Fragment>
        <form>
          <h4>Signup</h4>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success mr-3"
              value="Sign Up"
              onClick={this.signup}
            />
            <a href="/login">Login</a>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default Signup;
