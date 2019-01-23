import React from "react";

export default class UserInfo extends React.Component {
  render() {
    return (
      <div className="userInfo">
        <img
          src="https://www.codeandweb.com/blog/2015/10/07/phaser-p2-physics-example-tutorial/betty.png"
          alt=""
          className="avatar"
        />

        <div className="userText">
          #MyUsername <br />
          <img
            className="seticon"
            src="https://www.iconsdb.com/icons/preview/white/settings-4-xxl.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
