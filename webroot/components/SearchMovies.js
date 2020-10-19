//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit

// IPI code "df2fb09cc0e905c69975b38364ada687"

import React, { useState } from 'react';
import MovieCards from './MovieCards';

export default function SearchMovies() {

    // states- input query, movies
    const [query, setQuery] = useState('');

    // create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=df2fb09cc0e905c69975b38364ada687&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            console.log(data.results);
        } catch(err) {
            console.log(err);
        }
       
    }
    return(
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie name:</label>
                <input 
                type="text" 
                name="query" 
                className="input" 
                placeholder="i.e. Jurassic Park"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => {
                    return(<MovieCards key={movie.id} movie={movie}/>
                    )}
                )}
            </div>
        </div>
    )
}