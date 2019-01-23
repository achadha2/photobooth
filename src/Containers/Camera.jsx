import React from "react";
import adapter from "webrtc-adapter";

export default class Camera extends React.Component {
  state = {
    constraints: { audio: false, video: { width: 400, height: 300 } }
  };
  componentDidMount() {
    const constraints = this.state.constraints;

    this.getUserMedia(constraints)
      .then(stream => {
        const video = document.querySelector("video");
        const vendorURL = window.URL || window.webkitURL;

        video.src = vendorURL.createObjectURL(stream);
        video.play();
      })
      .catch(err => {
        console.log(err);
      });

    this.clearPhoto();
  }

  clearPhoto = () => {
    const canvas = document.querySelector("canvas");
    const photo = document.getElementById("photo");
    const context = canvas.getContext("2d");
    const { width, height } = this.state.constraints.video;
    context.fillStyle = "#FFF";
    context.fillRect(0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  };

  getUserMedia = params => {
    new Promise((successCallback, errorCallback) => {
      navigator.webkitGetUserMedia.call(
        navigator,
        params,
        successCallback,
        errorCallback
      );
    });
  };

  render() {
    return <div>Moneky!</div>;
  }
}
