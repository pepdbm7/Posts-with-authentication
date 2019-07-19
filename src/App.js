import React, { Component } from "react";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    appName: "ReactJS Feed Example",
    home: false
  };

  render() {
    return (
      <div className="app">
        <Header name={this.state.appName} />
        <Routes name={this.state.appName} />
        <Footer />
      </div>
    );
  }
}
export default App;
