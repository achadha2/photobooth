import React from "react";
import Convo from "../Components/Convo";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

let activeRoom;
let previewTracks;
let identity;
let roomName;
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default class ConvoContainer extends React.Component {
  state = {
    roomInput: ""
  };

  handleChange = e => {
    this.setState({
      roomInput: e.target.value
    });
  };

  // Leave Room.
  leaveRoomIfJoined = () => {
    if (activeRoom) {
      activeRoom.disconnect();
    }
  };

  // window.addEventListener('beforeunload', this.leaveRoomIfJoined);

  render() {
    return (
      <div className="convoCon">
        <form onSubmit={this.props.setRoom}>
          <input
            id="outlined-simple-start-adornment"
            className="textfield"
            label="Room Number"
            type="text"
            onChange={this.handleChange}
            value={this.state.roomInput}
            placeholder="Enter Room Name"
          />
          <Button type="submit" variant="contained" color="primary" value="Go">
            Join Room
          </Button>
        </form>
      </div>
    );
  }
}
