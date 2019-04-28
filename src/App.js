import React, { Component } from "react";
import SidebarContainer from "./Containers/SidebarContainer";
import BigAreaContainer from "./Containers/BigAreaContainer";

class App extends Component {
render() {
  return (
    <div>
      YOLO
    <div>
  )
}

  //------------------------------------
  // state = {
  //   preview: true,
  //   effect: "none",
  //   webeffect: "none",
  //   x: 0,
  //   y: 0
  // };
  //
  // previewCam = () => {
  //   console.log("yeas");
  //   this.setState({
  //     preview: !this.state.preview
  //   });
  //   console.log(this.state.preview);
  // };
  //
  // handleEffect = (e, effect, webeffect) => {
  //   this.setState({
  //     effect: effect,
  //     webeffect: webeffect
  //   });
  //   console.log(e.target);
  //   let activeEffect = e.target;
  //   activeEffect.classList.add("active");
  //   // target = getEle;
  //
  //   // debugger;
  // };
  //
  // closeModal = () => {
  //   let modal = document.getElementById("myModal");
  //   let modal2 = document.getElementById("myModal2");
  //   modal.style.display = "none";
  //   modal2.style.display = "none";
  // };
  //
  // closeLibrary = () => {
  //   let modal3 = document.getElementById("myModal3");
  //   modal3.style.display = "none";
  // };
  //
  // openModal = e => {
  //   this.closeLibrary();
  //   let modal = document.getElementById("myModal2");
  //   modal.style.display = "block";
  //   let canvas = document.getElementById("editing");
  //   let ctx = canvas.getContext("2d");
  //   let target = e.target;
  //   ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
  // };
  //
  // openLibrary = e => {
  //   this.closeModal();
  //   let modal = document.getElementById("myModal3");
  //   modal.style.display = "block";
  //   // let canvas = document.getElementById("editing");
  //   // let ctx = canvas.getContext("2d");
  //   // let target = e.target;
  //   // ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
  // };
  //
  // favoritePic = e => {
  //   let modal = document.getElementById("thumbs");
  //   let canvas = document.createElement("CANVAS");
  //   canvas.addEventListener("click", this.openModal);
  //   modal.appendChild(canvas);
  //   canvas.classList = "library";
  //   // canvas.onClick = this.
  //   let ctx = canvas.getContext("2d");
  //   let target = e.target;
  //   ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
  //   this.openLibrary();
  // };
  //
  // handleDownload = e => {
  //   let tmpLink = document.createElement("a");
  //   let canvas = document.getElementById("editing");
  //
  //   let imageData = canvas.toDataURL();
  //
  //   tmpLink.download = "img.png";
  //   tmpLink.href = imageData;
  //
  //   document.body.appendChild(tmpLink);
  //   tmpLink.click();
  //   document.body.removeChild(tmpLink);
  // };
  //
  // addText = e => {
  //   let text = document.getElementById("input").value;
  //   let canvas = document.getElementById("editing");
  //
  //   let ctx = canvas.getContext("2d");
  //
  //   ctx.filter = this.state.webeffect;
  //
  //   ctx.font = "30px Comic Sans MS";
  //   ctx.fillStyle = "red";
  //   ctx.fillText(text, 10, 50);
  // };
  //
  // render() {
  //   return (
  //     <div className="app">
  //       <SidebarContainer handleEffect={this.handleEffect} />
  //       <BigAreaContainer
  //         token={this.state.token}
  //         preview={this.state.preview}
  //         effect={this.state.effect}
  //         webeffect={this.state.webeffect}
  //         openModal={this.openModal}
  //       />
  //       <div id="myModal" class="modal" onClick={this.closeModal}>
  //         <div class="modal-content">
  //           <span class="close">&times;</span>
  //           <p>
  //             <h1>Welcome to SNAP</h1>
  //           </p>
  //           <p>Step 1: Choose a fun effect</p>
  //           <p>Step 2: Put on your cheesiest smile</p>
  //           <p>Step 3: Click the big center webcam to start SNAP-ping</p>
  //           <p>Step 4: Watch as every second a pic is taken of you</p>
  //           <p>Step 5: Click on the images to add text or download</p>
  //         </div>
  //       </div>
  //       <div id="myModal2" class="modal2">
  //         <div class="modal-content2">
  //           <div class="modal-header">
  //             <span class="close" onClick={this.closeModal}>
  //               &times;
  //             </span>
  //             <h2>Check out your new pic!</h2>
  //           </div>
  //           <div class="modal-body">
  //             <center>
  //               <canvas
  //                 id="editing"
  //                 width="448"
  //                 height="336"
  //                 onClick={this.favoritePic}
  //               />
  //               <br />
  //               <button
  //                 className="buttons"
  //                 id="download"
  //                 onClick={this.handleDownload}
  //               >
  //                 Download Pic!
  //               </button>
  //               <input
  //                 type="textfield"
  //                 id="input"
  //                 placerholder="Your Text"
  //                 className="textfield2"
  //               />
  //               <button className="buttons" id="addtext" onClick={this.addText}>
  //                 Add text!
  //               </button>
  //             </center>
  //           </div>
  //           <div class="modal-footer">
  //             <h3>Then download it!</h3>
  //           </div>
  //         </div>
  //       </div>
  //       <div id="myModal3" class="modal3">
  //         <div class="modal-content2">
  //           <div class="modal-header">
  //             <span class="close" onClick={this.closeLibrary}>
  //               &times;
  //             </span>
  //             <h2>Look at all the pics!</h2>
  //           </div>
  //           <div class="modal-body" id="thumbs" />
  //           <div class="modal-footer">
  //             <h3>Go take more!</h3>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
