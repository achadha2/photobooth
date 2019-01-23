import React from "react";

export default class VideoCom extends React.Component {
  render() {
    return (
      <div>
        <div id="remote-media" />
        <div id="controls">
          <div id="preview">
            <p class="instructions">Hello Beautiful</p>
            <div id="local-media" />
            <button id="button-preview">Preview My Camera</button>
          </div>
          <div id="room-controls">
            <p class="instructions">Room Name:</p>
            <input id="room-name" type="text" placeholder="Enter a room name" />
            <button id="button-join">Join Room</button>
            <button id="button-leave">Leave Room</button>
          </div>
          <div id="log" />
        </div>
      </div>
    );
  }
}
