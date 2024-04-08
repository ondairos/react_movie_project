import React from "react";
import SearchIcon from "./search.svg";

const Search = (props) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.searchMovies(props.SearchTerm);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={props.SearchTerm} //
        onChange={(e) => props.setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <img
        src={SearchIcon}
        alt="search"
        onClick={() => props.searchMovies(props.SearchTerm)}
      />
    </div>
  );
};

export default Search;
