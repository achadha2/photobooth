import React from "react";
const { createLocalVideoTrack } = require("twilio-video");

export default class SidebarContainer extends React.Component {
  componentDidMount() {
    this.whatRender();
  }

  state = {
    effect: [
      "none",
      "gray",
      "invert",
      "blur",
      "bizzaro",
      "sepia",
      "saturate",
      "contrast"
    ]
  };

  whatRender = () => {
    createLocalVideoTrack({
      audio: false,
      video: { width: 200 }
    }).then(track => {
      for (let i = 1; i < 9; i++) {
        const localMediaContainer = document.getElementById("local-media" + i);
        const childNode = localMediaContainer.firstChild;
        localMediaContainer.appendChild(track.attach(), childNode);
        let con = document.getElementById("local-media" + i);
        con.childNodes[0].classList.add("smallcam", this.state.effect[i - 1]);
      }
    });
  };

  render() {
    return (
      <div className="sidebar">
        <center>
          <h2>Effects:</h2>
        </center>
        <div className="camBox">
          <div
            id="local-media1"
            onClick={e => this.props.handleEffect(e, "none", "none")}
            className="small-media"
          />
        </div>
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
        <div className="camBox">
          <div
            id="local-media8"
            onClick={e =>
              this.props.handleEffect(e, "contrast(500%)", "contrast")
            }
            className="small-media"
          />
        </div>
        <center>
          <h3>Contrast</h3>
        </center>
      </div>
    );
  }
}
