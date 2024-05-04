import React, { useEffect, useState } from "react";
import axios from "axios";


const api = "https://newsapi.org/v2/everything?q=keyword&apiKey=b059c19575e4498fa90c7fbd6640b7d5";

function Info() {
    const [news, setNews] = useState([])

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
    <div className="news-container"> 
      <h2>Latest News</h2>
      <ul className="news-list"> 
        {news.map((article, index) => (
          <li key={index} className="news-item">
            <img src={article.urlToImage} alt={article.title} className="news-image" /> 
            <div className="news-info">
              <h3 className="news-title">{article.title}</h3> 
              <p className="news-description">{article.description}</p> 
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;