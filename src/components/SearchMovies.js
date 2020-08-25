import React, {useState} from "react";

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
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f84469b32572db997cc3c78f8dc5a2f1&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results)
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
                placeholder=" Enter movie to search for (i.e. Jurassic Park, Total Recall)"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <br />
        {/* Display all of the information from  */}
            <div className="card-list ">
                {movies.filter(m => m.poster_path).map(m => (
                    /* Card image */
                    <div className="card center" key={m.id}>
                    <img className ="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${m.poster_path}`}
                        alt={'\n'+ '❌ unable to load' + m.title + ' poster' + '\n' + '\n'} 
                        />

                {/*  */}
            </div>
        ))}
        </div>
    </>    
    )
}