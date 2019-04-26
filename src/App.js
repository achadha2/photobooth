import React, { Component } from "react";
import SidebarContainer from "./Containers/SidebarContainer";
import BigAreaContainer from "./Containers/BigAreaContainer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ButtonAppBar from "./Components/Navbar";

// Client X is offset by 497px
// Client Y is offset by 167

const styles = {
  button: {
    margin: "10px 10px 10px 10px",
    color: "#ff6961",
    borderColor: "#f7d7d7"
  },
  textfield: {
    height: "25px"
  },
  formControl: {
    height: "50px;",
    width: "300px"
  }
};

class App extends Component {
  state = {
    preview: true,
    effect: "none",
    webeffect: "none",
    editing: false,
    x: 0,
    y: 0,
    currentImg: {},
    userGallery: [],
    user_id: "1",
    inputEmail: "",
    inputPass: ""
  };

  componentDidMount() {
    this.fetchGallery();
  }

  fetchGallery = () => {
    fetch("http://localhost:3001/api/users/" + this.state.user_id + "/images")
      .then(res => res.json())
      .then(json =>
        this.setState({
          userGallery: json
        })
      );
    this.displayImages();
  };

  displayImages = () => {
    let modal = document.getElementById("thumbs");
    let images = this.state.userGallery;
    console.log("hello");
    console.log(images);
    if (images.length < 1) {
      console.log("truth");
      this.setState({
        preview: false
      });
      console.log();
    }
    images.map(image => {
      modal.appendChild(canvas);
      let canvas = document.createElement("CANVAS");
      canvas.classList = "library";
      let ctx = canvas.getContext("2d");
      let target = image.imageData;
      console.log(target);
    });

    // let target = e.target;
    //
    // ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
    // this.openLibrary();
  };

  // handleLogin = () => {
  //   const email = $("#email").val();
  //   const password = $("#password").val();
  //   const request = { auth: { email: email, password: password } };
  //   console.log(request);
  //   $.ajax({
  //     url: "http://localhost:3001/api/user_token",
  //     type: "POST",
  //     data: request,
  //     dataType: "json",
  //     success: function(result) {
  //       console.log(result);
  //       localStorage.setItem("jwt", result.jwt);
  //     }
  //   });
  // };

  handleEffect = (e, effect, webeffect) => {
    this.setState({
      effect: effect,
      webeffect: webeffect
    });
    console.log(e.target);
    let activeEffect = e.target;
    activeEffect.classList.add("active");
    // target = getEle;

    // debugger;
  };

  closeModal = () => {
    let modal = document.getElementById("myModal");
    let modal2 = document.getElementById("myModal2");
    let modal4 = document.getElementById("myModal4");
    modal.style.display = "none";
    modal2.style.display = "none";
    modal4.style.display = "none";
  };

  closeLibrary = () => {
    let modal3 = document.getElementById("myModal3");
    modal3.style.display = "none";
  };

  handleFormChange = e => {
    console.log(e.target.id, e.target.value);
    let key = e.target.id;
    let value = e.target.value;
    this.setState({
      key: value
    });
  };

  openModal = e => {
    // fetch("http://localhost:3001/api/users/1/images/")
    //   .then(resp => resp.json())
    //   .then(json =>
    //     this.setState({
    //       currentImg: json[0].imgdata
    //     })
    //   );
    this.setState({
      currentImg: e.target
    });

    // let img = new Image();
    // console.log(this.state.currentImg);

    // img.src = this.state.currentImg;
    this.closeLibrary();
    let modal = document.getElementById("myModal2");
    modal.style.display = "block";

    let canvas = document.getElementById("editing");
    let ctx = canvas.getContext("2d");
    let target = e.target;
    ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
  };

  openLogin = e => {
    // this.closeModal();
    console.log("lmao");
    let modal = document.getElementById("myModal4");
    modal.style.display = "block";
  };

  handleLogin = () => {
    console.log("logged in!");
  };

  handleGallery = () => {
    this.openLibrary();
    let modal = document.getElementById("thumbs");
    let images = this.state.userGallery;
    modal.innerHTML = "";
    console.log(images);
    images.map(image => {
      let canvas = document.createElement("CANVAS");
      let ctx = canvas.getContext("2d");
      var myImage = new Image();
      myImage.onload = function() {
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
      };
      myImage.src = image.imgdata;
      canvas.classList = "library";
      modal.appendChild(canvas);
      // img.src = image.imgdata;
    });
  };

  openLibrary = e => {
    this.closeModal();
    let modal = document.getElementById("myModal3");
    modal.style.display = "block";
  };

  favoritePic = e => {
    let modal = document.getElementById("thumbs");
    let canvas = document.createElement("CANVAS");

    canvas.addEventListener("click", this.openModal);
    modal.appendChild(canvas);
    canvas.classList = "library";

    let ctx = canvas.getContext("2d");
    let target = e.target;

    this.openLibrary();
  };

  handleDownload = e => {
    let tmpLink = document.createElement("a");
    let canvas = document.getElementById("editing");

    let imageData = canvas.toDataURL();
    console.log(imageData);
    debugger;

    tmpLink.download = "img.png";
    tmpLink.href = imageData;

    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
  };

  addText = e => {
    let target = this.state.currentImg;
    let text = document.getElementById("input").value;
    let canvas = document.getElementById("editing");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(target, 0, 0, canvas.width, canvas.height);
    ctx.filter = this.state.webeffect;

    ctx.font = "40px Sans-serif";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeText(text, 10, 50);
    ctx.fillStyle = "white";
    ctx.fillText(text, 10, 50);
  };

  render() {
    return (
      <div className="app">
        <ButtonAppBar
          openLogin={this.openLogin}
          handleGallery={this.handleGallery}
        />
        <div className="innerapp">
          <SidebarContainer handleEffect={this.handleEffect} />
          <BigAreaContainer
            token={this.state.token}
            preview={this.state.preview}
            effect={this.state.effect}
            webeffect={this.state.webeffect}
            openModal={this.openModal}
          />

          <div id="myModal" class="modal" onClick={this.closeModal}>
            <div class="modal-content">
              <span class="close">&times;</span>
              <p>
                <h1>Welcome to SNAP</h1>
              </p>
              <p>Step 1: Choose a fun effect</p>
              <p>Step 2: Put on your cheesiest smile</p>
              <p>Step 3: Click the big center webcam to start SNAP-ping</p>
              <p>Step 4: Watch as every second a pic is taken of you</p>
              <p>Step 5: Click on the images to add text or download</p>
            </div>
          </div>
          <div id="myModal2" class="modal2">
            <div class="modal-content2">
              <div class="modal-header">
                <span class="close" onClick={this.closeModal}>
                  &times;
                </span>
                <h3>Your Picture</h3>
              </div>
              <div class="modal-body">
                <center>
                  <canvas
                    id="editing"
                    width="448"
                    height="336"
                    onClick={this.favoritePic}
                  />
                  <br />

                  <FormControl className={this.props.classes.formControl}>
                    <InputLabel htmlFor="component-simple">Add text</InputLabel>
                    <Input id="input" />
                  </FormControl>

                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.addText}
                    className={this.props.classes.button}
                  >
                    Add text
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleDownload}
                    className={this.props.classes.button}
                  >
                    Download
                  </Button>
                </center>
              </div>
              <div class="modal-footer">
                <h3 />
              </div>
            </div>
          </div>
          <div id="myModal3" class="modal3">
            <div class="modal-content2">
              <div class="modal-header">
                <span class="close" onClick={this.closeLibrary}>
                  &times;
                </span>
                <h2>Gallery</h2>
              </div>
              <div class="modal-body" id="thumbs" />
              <div class="modal-footer">
                <h3 />
              </div>
            </div>
          </div>

          <div id="myModal4" class="modal4">
            <div class="modal-content2">
              <div class="modal-header">
                <span class="close" onClick={this.closeModal}>
                  &times;
                </span>
                <h2>Login</h2>
              </div>

              <div class="modal-body">
                <center>
                  <FormControl className={this.props.classes.formControl}>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input id="inputEmail" onChange={this.handleFormChange} />
                  </FormControl>
                  <br />
                  <br />
                  <FormControl className={this.props.classes.formControl}>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input id="inputPass" onChange={this.handleFormChange} />
                  </FormControl>
                  <br />
                  <br />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleLogin}
                    className={this.props.classes.button}
                  >
                    Login
                  </Button>
                </center>
              </div>
              <div class="modal-footer">
                <h3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
