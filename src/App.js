import React, { Component } from "react";
import logo from "./logo.svg";
import SidebarContainer from "./Containers/SidebarContainer";
import BigAreaContainer from "./Containers/BigAreaContainer";

class App extends Component {
  state = {
    preview: true,
    effect: "none"
  };

  previewCam = () => {
    console.log("yeas");
    this.setState({
      preview: !this.state.preview
    });
    console.log(this.state.preview);
  };

  handleEffect = (e, className) => {
    console.log(className);
    this.setState({
      effect: className
    });
  };

  render() {
    return (
      <div className="app">
        <SidebarContainer handleEffect={this.handleEffect} />
        <BigAreaContainer
          token={this.state.token}
          preview={this.state.preview}
          effect={this.state.effect}
        />
      </div>
    );
  }
}

export default App;
