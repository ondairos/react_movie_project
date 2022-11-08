import React from 'react'
import { useEffect } from 'react'
import apiUrl from './helper.js'

import MovieCard from './MovieCard.jsx';

import './App.css'; //import css
import SearchIcon from './search.svg';

const movie1 = {
    "Title": "Batman & Robin",
    "Year": "1997",
    "imdbID": "tt0118688",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`); //template strings
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>Flik Search</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value="Batman"
                    onChange={() => { }}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>

            <div className='container'>
               <MovieCard  movie1={movie1}/>
            </div>
        </div>
    )
}

export default App;