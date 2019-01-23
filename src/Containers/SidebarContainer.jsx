import React from "react";
import Logo from "../Components/Logo";
import UserInfo from "../Components/UserInfo";
import ConvoContainer from "./ConvoContainer";
import CameraPreview from "./CameraPreview";
const { createLocalVideoTrack } = require("twilio-video");

export default class SidebarContainer extends React.Component {
  componentDidMount() {
    this.whatRender();
  }

  whatRender = () => {
    createLocalVideoTrack({
      audio: false,
      video: { width: 200 }
    }).then(track => {
      const localMediaContainer1 = document.getElementById("local-media1");
      const localMediaContainer2 = document.getElementById("local-media2");
      const localMediaContainer3 = document.getElementById("local-media3");
      const localMediaContainer4 = document.getElementById("local-media4");
      const localMediaContainer5 = document.getElementById("local-media5");

      const childNode1 = localMediaContainer1.firstChild;
      const childNode2 = localMediaContainer2.firstChild;
      const childNode3 = localMediaContainer3.firstChild;
      const childNode4 = localMediaContainer4.firstChild;
      const childNode5 = localMediaContainer5.firstChild;

      // debugger;
      localMediaContainer1.appendChild(track.attach(), childNode1);
      localMediaContainer2.appendChild(track.attach(), childNode2);
      localMediaContainer3.appendChild(track.attach(), childNode3);
      localMediaContainer4.appendChild(track.attach(), childNode4);
      localMediaContainer5.appendChild(track.attach(), childNode5);

      let con1 = document.getElementById("local-media1");
      let con2 = document.getElementById("local-media2");
      let con3 = document.getElementById("local-media3");
      let con4 = document.getElementById("local-media4");
      let con5 = document.getElementById("local-media5");

      con1.childNodes[0].classList.add("smallcam");
      con2.childNodes[0].classList.add("smallcam", "gray");
      con3.childNodes[0].classList.add("smallcam", "invert");
      con4.childNodes[0].classList.add("smallcam", "blur");
      con5.childNodes[0].classList.add("smallcam", "bizzaro");
    });
  };

  render() {
    return (
      <div className="sidebar">
        <center>
          <h2>Effects:</h2>
        </center>
        <div
          id="local-media1"
          onClick={e => this.props.handleEffect(e, "none")}
          className="small-media"
        />
        <center>
          <h3>Normal</h3>
        </center>
        <div
          id="local-media2"
          onClick={e => this.props.handleEffect(e, "gray")}
          className="small-media"
        />
        <center>
          <h3>Grayscale</h3>
        </center>
        <div
          id="local-media3"
          onClick={e => this.props.handleEffect(e, "invert")}
          className="small-media"
        />
        <center>
          <h3>Inverted</h3>
        </center>
        <div
          id="local-media4"
          onClick={e => this.props.handleEffect(e, "blur")}
          className="small-media"
        />
        <center>
          <h3>Blur</h3>
        </center>
        <div
          id="local-media5"
          onClick={e => this.props.handleEffect(e, "bizzaro")}
          className="small-media"
        />
        <center>
          <h3>Bizzaro</h3>
        </center>
      </div>
    );
  }
}

// <center>
//   <Logo />
//   <ConvoContainer setRoom={this.props.setRoom} />
//   <CameraPreview
//     previewCam={this.props.previewCam}
//     preview={this.props.preview}
//   />
//   <UserInfo />
// </center>
