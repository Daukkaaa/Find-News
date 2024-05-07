import React from "react";

const Info = (props) => {

  return (
    <div className="news-container">
      <div className="request">
        {props.request ? `At your request: ${props.request}` : "Latest News"}
      </div>
      <ul className="news-list">
        {props.news.map((el) => (
          <li className="news-item">
            <img className="news-img" src={el.urlToImage} alt={el.title} />
            <div className="news-info">
              <h3 className="news-title">{el.title}</h3>
              <p className="news-description">{el.description}</p>
              <a href={el.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Info;














