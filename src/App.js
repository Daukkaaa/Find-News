import React, { useEffect, useState } from "react";
import Header from './Components/Header.js';
import './main.css';
import logo from './Ellipse 3059.png';
import Info from "./Components/Info.js";
import axios from "axios";


const baseUrl = "https://newsapi.org/v2/everything?q=keyword&apiKey=b059c19575e4498fa90c7fbd6640b7d5";


function App() {
  const [news, setNews] = useState([]);
  const [request, setRequest] = useState('')

  useEffect(() => {
    axios.get(baseUrl)
    .then((res) => {
      setNews(res.data.articles)
    })
    .catch((error) => {
      console.log("Error fetching news:", error)
    })
  }, [])

  return (
    <div>
      <Header src={logo} setNews={setNews} setRequest={setRequest} />
      <main>
        <Info news={news} request={request} />
      </main>
    </div>
  );
}

export default App;










