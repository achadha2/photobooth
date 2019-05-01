import React from "react";
import { timer } from "rxjs";
import { take } from "rxjs/operators";
import trigger from "./camera.png";
// import logo from "./logo.png";

// import SpeechRecognition from "react-speech-recognition";
const { createLocalVideoTrack } = require("twilio-video");
// const recognition = new webkitSpeechRecognition();

export default class Webcam extends React.Component {
  state = {
    canvasElements: ["myCanvasa", "myCanvasb", "myCanvasc", "myCanvasd"]
  };

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

  // callState = () => {
  //   this.setState({
  //     counter: 2
  //   });
  // };

  // counterCall = () => {
  //   let counter = 3;
  //   timer(1000, 1000)
  //     .pipe(take(3))
  //     .subscribe(it => {
  //       return it;
  //     });
  // };

  snapshot = () => {
    let msg3 = new SpeechSynthesisUtterance("Three!");
    let msg2 = new SpeechSynthesisUtterance("Two!");
    let msg1 = new SpeechSynthesisUtterance("One!");
    let msg0 = new SpeechSynthesisUtterance("SMILE!");
    let countDiv = document.getElementById("countdown");
    // let countBack = document.getElementById("countdownback");

    window.speechSynthesis.speak(msg3);
    countDiv.innerHTML = "3";
    // countBack.innerHTML = "3";
    countDiv.classList.add("zoomAnimation");

    // this.counterCall();

    setTimeout(function() {
      window.speechSynthesis.speak(msg2);
      countDiv.innerHTML = "2";
      // countBack.innerHTML = "2";
    }, 1000);

    // setTimeout(function() {
    //   this.callState();
    // }, 1000);

    setTimeout(function() {
      window.speechSynthesis.speak(msg1);
      countDiv.innerHTML = "1";
    }, 2000);

    setTimeout(function() {
      window.speechSynthesis.speak(msg0);
      countDiv.innerHTML = "";
      countDiv.classList.remove("zoomAnimation");
    }, 3000);

    let canvasA = document.getElementById("myCanvasa");
    let canvasB = document.getElementById("myCanvasb");
    let canvasC = document.getElementById("myCanvasc");
    let canvasD = document.getElementById("myCanvasd");
    let ctxa = canvasA.getContext("2d");
    let ctxb = canvasB.getContext("2d");
    let ctxc = canvasC.getContext("2d");
    let ctxd = canvasD.getContext("2d");
    let video = document.querySelector("video");
    let mainVid = document.getElementById("mainvid");
    let audio = new Audio("shutter.mp3");
    let effect = this.props.effect;

    setTimeout(function() {
      let mainVid = document.getElementById("mainvid");
      var audio = new Audio("shutter.mp3");
      audio.play();
      mainVid.classList.add("flash");
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 4000);

    setTimeout(function() {
      ctxa.filter = effect;
      ctxa.drawImage(video, 0, 0, canvasA.width, canvasA.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
        canvasA.style.display = "block";
      }, 200);
    }, 5000);

    setTimeout(function() {
      ctxb.filter = effect;
      ctxb.drawImage(video, 0, 0, canvasB.width, canvasB.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 6000);

    setTimeout(function() {
      ctxc.filter = effect;
      ctxc.drawImage(video, 0, 0, canvasC.width, canvasB.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 7000);

    setTimeout(function() {
      ctxd.filter = effect;
      ctxd.drawImage(video, 0, 0, canvasD.width, canvasB.height);
      // mainVid.classList.add("flash");
      // audio.play();
      // setTimeout(function() {
      //   mainVid.classList.remove("flash");
      // }, 200);
    }, 8000);
  };

  handleFlash = () => {
    let mainVid = document.getElementById("mainvid");
    var audio = new Audio("shutter.mp3");
    audio.play();
    mainVid.classList.add("flash");
    setTimeout(function() {
      mainVid.classList.remove("flash");
    }, 200);
  };

  handleDownload = e => {
    let id = e.target.id;
    let tmpLink = document.createElement("a");
    let canvas = document.getElementById(id);

    let imageData = canvas.toDataURL();

    tmpLink.download = "img.png";
    tmpLink.href = imageData;

    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
  };

  render() {
    return (
      <div className="welCon">
        <div className="camwrap">
          <div className="camclick">
            <img src={trigger} alt="logo" />
          </div>
          <div className="countdown" id="countdown" />

          <div onClick={this.snapshot} id="local-media" className="local-media">
            {this.whatRender()}
          </div>
        </div>
        <div>
          <canvas
            className="none"
            onClick={this.props.openModal}
            id="myCanvasa"
            width="182"
            height="136"
          />
          <canvas
            className="none"
            onClick={this.props.openModal}
            id="myCanvasb"
            width="182"
            height="136"
          />
          <canvas
            className="none"
            onClick={this.props.openModal}
            id="myCanvasc"
            width="182"
            height="136"
          />
          <canvas
            className="none"
            onClick={this.props.openModal}
            id="myCanvasd"
            width="182"
            height="136"
          />
        </div>
      </div>
    );
  }
}
