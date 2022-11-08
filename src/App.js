import React from 'react'
import { useEffect } from 'react'
import apiUrl from './helper.js'

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
        <h1>App</h1>
    )
}

export default App;