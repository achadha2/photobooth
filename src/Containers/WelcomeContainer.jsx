import React from "react";
import SpeechRecognition from "react-speech-recognition";
const { createLocalVideoTrack } = require("twilio-video");
// const recognition = new webkitSpeechRecognition();

export default class Webcam extends React.Component {
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
      document.getElementById("mainvid").classList.add(this.props.effect);
    });
  };

  snapshot = () => {
    let msg3 = new SpeechSynthesisUtterance("Three!");
    let msg2 = new SpeechSynthesisUtterance("TWO!");
    let msg1 = new SpeechSynthesisUtterance("One!");
    let msg0 = new SpeechSynthesisUtterance("SMILE!");

    window.speechSynthesis.speak(msg3);

    setTimeout(function() {
      window.speechSynthesis.speak(msg2);
    }, 1000);

    setTimeout(function() {
      window.speechSynthesis.speak(msg1);
    }, 2000);

    setTimeout(function() {
      window.speechSynthesis.speak(msg0);
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

    setTimeout(function() {
      let mainVid = document.getElementById("mainvid");
      var audio = new Audio("shutter.mp3");
      audio.play();
      mainVid.classList.add("flash");
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 4000);

    ctxa.drawImage(video, 0, 0, canvasA.width, canvasA.height);
    setTimeout(function() {
      ctxb.drawImage(video, 0, 0, canvasB.width, canvasB.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 5000);

    setTimeout(function() {
      ctxc.drawImage(video, 0, 0, canvasC.width, canvasB.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 6000);
    setTimeout(function() {
      ctxd.drawImage(video, 0, 0, canvasD.width, canvasB.height);
      mainVid.classList.add("flash");
      audio.play();
      setTimeout(function() {
        mainVid.classList.remove("flash");
      }, 200);
    }, 7000);
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
  // getCamera = () => {
  //   navigator.getUserMedia(
  //     {
  //       video: true,
  //       audio: false
  //     },
  //     function(stream) {
  //       video.src = window.URL.createObjectURL(stream);
  //       video.play();
  //     }
  //   );
  // };

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

  // handleListen = () => {
  //   let finalTranscript = "";
  //   let interimTranscript = "";
  //   recognition.start();
  //   recognition.onresult = event => {
  //     let interimTranscript = "";
  //
  //     for (let i = event.resultIndex; i < event.results.length; i++) {
  //       const transcript = event.results[i][0].transcript;
  //       if (event.results[i].isFinal) finalTranscript += transcript + " ";
  //       else interimTranscript += transcript;
  //     }
  //     console.log(finalTranscript);
  //   };
  // };
  countDown = () => {};
  render() {
    return (
      <div className="welCon">
        <div onClick={this.snapshot} id="local-media" className="local-media">
          {this.whatRender()}
        </div>

        <div>
          <canvas
            className={this.props.effect}
            onClick={this.handleDownload}
            id="myCanvasa"
            width="224"
            height="168"
          />
          <canvas
            className={this.props.effect}
            onClick={this.handleDownload}
            id="myCanvasb"
            width="224"
            height="168"
          />
          <canvas
            className={this.props.effect}
            onClick={this.handleDownload}
            id="myCanvasc"
            width="224"
            height="168"
          />
          <canvas
            className={this.props.effect}
            onClick={this.handleDownload}
            id="myCanvasd"
            width="224"
            height="168"
          />
        </div>
      </div>
    );
  }
}
