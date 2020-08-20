import React from "react";

export default function SearchMovies(){
    
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        //states for input query and movies
        //State is managed with React useState Hook.
        
        const query = "Jurassic Park";
        

        //Add my api key
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f84469b32572db997cc3c78f8dc5a2f1&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park, Total Recall"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}