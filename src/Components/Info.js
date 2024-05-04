import React, { useState } from "react";


function Info(props) {
    //const [title, setTitle] = useState('Latest News');


  return (
    <div className="news-container"> 
      <h2>Latest News</h2>
      <ul className="news-list"> 
        {props.news.map((article, index) => (
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

