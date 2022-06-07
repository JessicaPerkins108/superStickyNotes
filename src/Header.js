import React from "react";
import "./index.css";

// add onClick event listener to button
const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header>
      <h1 className="sticky">Super Sticky Notes</h1>
      <button className="add-new newBtn" onClick={props.addNote}>
        New Note
      </button>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={props.searchText}
        onChange={callSearch}
      />
    </header>
  );
};

export default Header;
