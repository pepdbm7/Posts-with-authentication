import React, { Component } from "react";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";

class App extends Component {
  state = {
    appName: "ReactJS Feed Example",
    home: false
  };

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas-content" data-off-canvas-content>
            <MobileHeader name={this.state.appName} />
            <Header name={this.state.appName} />
            <Routes name={this.state.appName} />
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
