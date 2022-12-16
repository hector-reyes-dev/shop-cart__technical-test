import React from "react";
import searchIcon from "@icons/icon_search.svg";
import "./Search.scss";

const Search = () => {
  return (
    <div className="input-box">
      <label htmlFor="search-field">
        <img src={searchIcon} alt="" />
        <input
          id="search-field"
          type="text"
          placeholder="¿Qué estás buscando?"
        ></input>
      </label>
    </div>
  );
};
export default Search;
