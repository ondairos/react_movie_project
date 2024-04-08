import React from "react";
import { useEffect, useState } from "react";

import MovieCard from "./MovieCard.jsx";

import "./App.css";
import imageCat from "./iggers.png";
import Search from "./Search.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>
        {" "}
        <img src={imageCat} alt="cat"></img> Flik Search{" "}
      </h1>

      <Search
        SearchTerm={SearchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
