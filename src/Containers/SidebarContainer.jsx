import React from "react";
// import Logo from "../Components/Logo";
// import UserInfo from "../Components/UserInfo";
// import ConvoContainer from "./ConvoContainer";
// import CameraPreview from "./CameraPreview";
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
      const localMediaContainer6 = document.getElementById("local-media6");
      const localMediaContainer7 = document.getElementById("local-media7");
      const localMediaContainer8 = document.getElementById("local-media8");

      const childNode1 = localMediaContainer1.firstChild;
      const childNode2 = localMediaContainer2.firstChild;
      const childNode3 = localMediaContainer3.firstChild;
      const childNode4 = localMediaContainer4.firstChild;
      const childNode5 = localMediaContainer5.firstChild;
      const childNode6 = localMediaContainer5.firstChild;
      const childNode7 = localMediaContainer5.firstChild;
      const childNode8 = localMediaContainer5.firstChild;

      // debugger;
      localMediaContainer1.appendChild(track.attach(), childNode1);
      localMediaContainer2.appendChild(track.attach(), childNode2);
      localMediaContainer3.appendChild(track.attach(), childNode3);
      localMediaContainer4.appendChild(track.attach(), childNode4);
      localMediaContainer5.appendChild(track.attach(), childNode5);
      localMediaContainer6.appendChild(track.attach(), childNode6);
      localMediaContainer7.appendChild(track.attach(), childNode7);
      localMediaContainer8.appendChild(track.attach(), childNode8);

      let con1 = document.getElementById("local-media1");
      let con2 = document.getElementById("local-media2");
      let con3 = document.getElementById("local-media3");
      let con4 = document.getElementById("local-media4");
      let con5 = document.getElementById("local-media5");
      let con6 = document.getElementById("local-media6");
      let con7 = document.getElementById("local-media7");
      let con8 = document.getElementById("local-media8");

      con1.childNodes[0].classList.add("smallcam", "none");
      con2.childNodes[0].classList.add("smallcam", "gray");
      con3.childNodes[0].classList.add("smallcam", "invert");
      con4.childNodes[0].classList.add("smallcam", "blur");
      con5.childNodes[0].classList.add("smallcam", "bizzaro");
      con6.childNodes[0].classList.add("smallcam", "sepia");
      con7.childNodes[0].classList.add("smallcam", "saturate");
      con8.childNodes[0].classList.add("smallcam", "contrast");
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
          onClick={e => this.props.handleEffect(e, "none", "none")}
          className="small-media"
        />
        <center>
          <h3>Normal</h3>
        </center>
        <div
          id="local-media2"
          onClick={e => this.props.handleEffect(e, "grayscale(100%)", "gray")}
          className="small-media"
        />
        <center>
          <h3>Grayscale</h3>
        </center>
        <div
          id="local-media3"
          onClick={e => this.props.handleEffect(e, "invert(100%)", "invert")}
          className="small-media"
        />
        <center>
          <h3>Inverted</h3>
        </center>
        <div
          id="local-media4"
          onClick={e => this.props.handleEffect(e, "blur(5px)", "blur")}
          className="small-media"
        />
        <center>
          <h3>Blur</h3>
        </center>
        <div
          id="local-media5"
          onClick={e =>
            this.props.handleEffect(e, "hue-rotate(90deg)", "bizzaro")
          }
          className="small-media"
        />
        <center>
          <h3>Bizzaro</h3>
        </center>
        <div
          id="local-media6"
          onClick={e => this.props.handleEffect(e, "sepia(400%)", "sepia")}
          className="small-media"
        />
        <center>
          <h3>Sepia</h3>
        </center>
        <div
          id="local-media7"
          onClick={e =>
            this.props.handleEffect(e, "saturate(800%)", "saturate")
          }
          className="small-media"
        />
        <center>
          <h3>Saturate</h3>
        </center>
        <div
          id="local-media8"
          onClick={e =>
            this.props.handleEffect(e, "contrast(500%)", "contrast")
          }
          className="small-media"
        />
        <center>
          <h3>Contrast</h3>
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
