import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const Input = (props) => {
    const [input, setInput] = useState('')

    function inputChange(e) {
        setInput(e.target.value)
    } 

    async function searchClick() {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${input}&apiKey=b059c19575e4498fa90c7fbd6640b7d5`);
            props.setNews(response.data.articles)
            props.setRequest(input)
            setInput("")
        } catch (error) {
            console.log("Error fetching news:", error)
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            searchClick();
        }
    }

  return (
    <div className="input">
      <CiSearch className="search-icon" onClick={searchClick} />
      <input placeholder="Search" value={input} onChange={inputChange} onKeyDown={handleKeyPress} />
    </div>
  );
};

export default Input;
















































