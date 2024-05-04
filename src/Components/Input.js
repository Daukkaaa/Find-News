import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
    <div className="input">
      <CiSearch className="search-icon" />
      <input placeholder="Search" />
    </div>
  );
};


export default Input;
