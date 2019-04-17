import React from "react";
// import Camera from "./Camera";
// import SuggestCont from "./SuggestContainer";
import Webcam from "./WelcomeContainer";
// import VideoCom from "../Components/VideoCom";

export default class BigAreaContainer extends React.Component {
  renderPreview = () => {
    if (this.props.preview === true) {
      return <Webcam preview={this.props.preview} />;
    } else {
      return <div> Welcome to the app!</div>;
    }
  };

  render() {
    return (
      <div>
        <Webcam
          preview={this.props.preview}
          effect={this.props.effect}
          webeffect={this.props.webeffect}
          openModal={this.props.openModal}
        />
      </div>
    );
  }
}

// {this.renderPreview()}
