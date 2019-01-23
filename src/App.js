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

  closeModal = () => {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
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
        <div id="myModal" class="modal" onClick={this.closeModal}>
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>
              <h1>Welcome to SNAP!</h1>
            </p>
            <p>Step 1: Choose a fun effect!</p>
            <p>Step 2: Put on your cheesiest smile</p>
            <p>Step 3: Click the big center webcam to start SNAPping</p>
            <p>Step 4: Watch as every second a pic is taken of you</p>
            <p>Step 5: Click on the images to download them!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
