import React from 'react'
import { useEffect } from 'react'
import apiUrl from './helper.js'

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
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A'? movie1.Poster: 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;