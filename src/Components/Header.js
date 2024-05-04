import React from "react";
import Input from "./Input.js";


function Header(props) {
  return (
    <div className="header">
      <div className="left">
        <img src={props.scr} alt="logo" /><h1>Warrison</h1>
      </div>
      <Input />
    </div>
  );
}

export default Header;
