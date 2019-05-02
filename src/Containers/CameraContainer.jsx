import React from "react";
import { timer } from "rxjs";
import { take } from "rxjs/operators";
import trigger from "./camera.png";
const { createLocalVideoTrack } = require("twilio-video");

class CameraContainer extends React.Component {
  whatRender = () => {
    createLocalVideoTrack({
      audio: false,
      video: { width: 900 }
    }).then(track => {
      const localMediaContainer = document.getElementById("local-media");
      const childNode = localMediaContainer.firstChild;
      // debugger;
      if (localMediaContainer.childNodes.length > 0) {
        localMediaContainer.removeChild(localMediaContainer.childNodes[0]);
      }
      localMediaContainer.appendChild(track.attach(), childNode);
      localMediaContainer.childNodes[0].id = "mainvid";
      document.getElementById("mainvid").className = "";
      document.getElementById("mainvid").classList.add(this.props.webeffect);
    });
  };

  render() {
    return (
      <div id="welCon">
        <div className="camclick">
          <img src={trigger} alt="logo" />
        </div>
        <div className="countdown" id="countdown" />
        <div className="camWrap">
          <div onClick={this.snapshot} id="local-media" className="local-media">
            {this.whatRender()}
          </div>
        </div>
      </div>
    );
  }
}

export default CameraContainer;
