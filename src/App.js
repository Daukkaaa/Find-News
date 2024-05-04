import React, { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import logo from './Ellipse 3059.png';
import './main.css';
import Info from "./Components/Info.js";
import axios from "axios";

const api = "https://newsapi.org/v2/everything?q=keyword&apiKey=b059c19575e4498fa90c7fbd6640b7d5";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(api)
    .then((res) => {
        setNews(res.data.articles)
    })
    .catch((error) => {
        console.log("Error fetching news:", error)
    })
}, [])

  return (
    <div>
      <Header scr={logo} setNews={setNews} />
      <main>
        <Info news={news} />
      </main>
    </div>
  );
}

export default App;
