import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../services/postdata";
import UserFeed from "./UserFeed";
import { confirmAlert } from "react-confirm-alert";

class Home extends Component {
  state = {
    data: [],
    userFeed: "",
    redirectToReferrer: false,
    name: ""
  };

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      this.getUserFeed();
    } else {
      this.setState({ redirectToReferrer: true });
    }
  }

  feedUpdate(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      user_id: data.userData.user_id,
      feed: this.state.userFeed
    };
    if (this.state.userFeed) {
      PostData("feedUpdate", postData).then(result => {
        let responseJson = result;
        this.setState({ data: responseJson.feedData });
      });
    }
  }

  deleteFeed(e) {
    confirmAlert({
      title: "Delete Feed",
      message: "Are you sure to delete this feed.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteFeedAction(e)
        },
        {
          label: "No",
          onClick: () => alert("Click No")
        }
      ]
    });
  }

  deleteFeedAction(e) {
    let updateIndex = e.target.getAttribute("value");

    let feed_id = document.getElementById("del").getAttribute("data");

    let data = JSON.parse(sessionStorage.getItem("userData"));

    let postData = { user_id: data.userData.user_id, feed_id: feed_id };
    if (postData) {
      PostData("feedDelete", postData).then(result => {
        this.state.data.splice(updateIndex, 1);
        this.setState({ data: this.state.data });

        if (result.success) {
          alert(result.success);
        } else alert(result.error);
      });
    }
  }

  editFeed(e) {
    alert("j");
  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({ name: data.userData.name });
    let postData = { user_id: data.userData.user_id };

    if (data) {
      PostData("feed", postData).then(result => {
        let responseJson = result;
        if (responseJson.feedData) {
          this.setState({ data: responseJson.feedData });
          console.log(this.state);
        }
      });
    }
  }

  onChange = e => {
    this.setState({ userFeed: e.target.value });
  };

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="">
        <div className="">
          <a href="#" onClick={this.logout} className="btn btn-light">
            Logout
          </a>
          <form onSubmit={this.feedUpdate} method="post">
            <input
              name="userFeed"
              onChange={this.onChange}
              value={this.state.userFeed}
              type="text"
              placeholder="Write your feed here..."
            />
            <input
              type="submit"
              value="Post"
              className="btn btn-success"
              onClick={this.feedUpdate}
            />
          </form>
        </div>
        <UserFeed
          feedData={this.state.data}
          deleteFeed={this.deleteFeed}
          name={this.state.name}
        />
      </div>
    );
  }
}

export default Home;
