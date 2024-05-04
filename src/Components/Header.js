import React from "react";
import Input from "./Input.js";

function Header(props) {
  return (
    <div className="header">
      <div className="left">
        <img src={props.scr} alt="logo" /><h1>Warrison News</h1>
      </div>
      <Input setNews={props.setNews} />
    </div>
  );
}

export default Header;
