import React from "react";
import Button from "@material-ui/core/Button";

export default class CameraPreview extends React.Component {
  //   createLocalVideoTrack().then(track => {
  //   const localMediaContainer = document.getElementById('local-media');
  //   localMediaContainer.appendChild(track.attach());
  // });

  buttonRender = () => {
    if (this.props.preview === true) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.previewCam}
        >
          Stop Preview
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.previewCam}
        >
          Preview Camera
        </Button>
      );
    }
  };

  render() {
    return <div className="recentCon">{this.buttonRender()}</div>;
  }
}
