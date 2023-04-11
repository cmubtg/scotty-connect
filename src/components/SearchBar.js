import React, { useState } from "react";

function SearchBar({ initialValue, handleSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
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
  );
}

export default SearchBar;
