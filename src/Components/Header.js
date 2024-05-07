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
        <Input setNews={props.setNews} />
      </div>
    </div>
  )
}

export default Header;








































/*import React from "react";
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
*/
