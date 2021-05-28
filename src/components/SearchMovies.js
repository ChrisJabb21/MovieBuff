import React, {useState} from "react";
import MovieCard from "./MovieCard.js";

export default function SearchMovies(){
    

    //states for input query and movies to be displayed from search
        //State is managed with React useState Hook.

    //Query state
    const [query, setQuery] = useState('');

    //Movies result state
    const[movies,setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        //Add your TMDB api key here
       // const url = `add api key here`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);

        }
    }
    
    return (
        <>
        {/* form for Search bar and search button*/}
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder=" Enter movie to search for (i.e. Total Recall)"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <br />
        {/* Display list  all of the information from  */}
            <div className="card-list ">
                {movies.filter(m => m.poster_path).map(m => (
                    <MovieCard m={m} key={m.id} />
        ))}
        </div>
    </>    
    )
}
