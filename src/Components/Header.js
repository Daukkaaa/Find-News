import React from "react";
import Input from "./Input.js";

const Header = (props) => {

  return (
    <div className="header">
      <div className="left-item">
        <img src={props.src} alt="Logo" />
        <h1>Farisson</h1>
      </div>
      <div className="rigth-item">
        <Input setNews={props.setNews} setRequest={props.setRequest} />
      </div>
    </div>
  )
}

export default Header;








































