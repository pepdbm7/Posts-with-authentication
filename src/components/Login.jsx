import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/postdata";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirectToReferrer: false
  };

  login() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state)
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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }
    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }
    return (
      <Fragment>
        <form>
          <h4>Login</h4>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.onChange}
            />
            <div className="form-group" />

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
              value="Login"
              onClick={this.login}
            />
          </div>
          <a href="/signup">Registration</a>
        </form>
      </Fragment>
    );
  }
}
export default Login;
