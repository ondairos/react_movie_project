import React from "react";
import App from './App.js'
import SearchIcon from './search.svg';



const Search = (props) => {
    
  return (
    <div className="search">
      <input
        placeholder="Search for movies"
        value={props.SearchTerm} //
        onChange={(e) => App.setSearchTerm(e.target.value)}
      />

      <img
        src={SearchIcon} //
        alt="search"
        onClick={() => App.searchMovies(props.SearchTerm)}
      />
    </div>
  );
};

export default Search;
