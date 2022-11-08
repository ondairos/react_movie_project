import React from 'react'
import { useEffect, useState } from 'react'
import apiUrl from './helper.js'

import MovieCard from './MovieCard.jsx';

import './App.css'; //import css
import SearchIcon from './search.svg';
import imageCat from './iggers.png'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`); //template strings
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1> <img src={imageCat} alt='cat'></img> Flik Search </h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={SearchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(SearchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2>No movies found.</h2>
                        </div>
                    )
            }


        </div>
    )
}

export default App;