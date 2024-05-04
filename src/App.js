import React from "react";
import Header from "./Components/Header.js";
import logo from './Ellipse 3059.png';
import './main.css';
import Info from "./Components/Info.js";


function App() {
  return (
    <div>
      <Header scr={logo} />
      <main>
        <Info />
      </main>
    </div>
  );
}

export default App;
