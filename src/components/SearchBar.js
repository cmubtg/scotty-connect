import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ initialValue, handleSearch, showClearIcon }) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    handleSearch("");
  };

  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        id="searchBar"
        className="searchbar"
        placeholder="Search people, courses, majors..."
        title="Type in a name"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showClearIcon && searchQuery && (
        <FontAwesomeIcon
          icon={faTimes}
          className="searchbar-clear-icon"
          onClick={handleClear}
        />
      )}
    </div>
  );
}

export default SearchBar;
