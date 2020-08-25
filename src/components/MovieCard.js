import React from "react";

/* Basic functional componet that: Should return all the following information:
movie poster img link path
title
release date
Average vote score.
desc */
export default function MovieCard({m}) {
    //const m = props.m; 
   // const {m} = props; //use destructuring
    return (
<div className="card center" key={m.id} >
     <img className ="card--image"
         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${m.poster_path}`}
         alt={'\n'+ '❌ unable to load' + m.title + "'s poster" + '\n'} 
         />
 <div className="card--content">
 <h3 className="card--title">{m.title}</h3>
 <p><small>Release Date: {m.release_date}</small></p>
 <p><small>Rating: {m.vote_average}</small></p>
 <p className="card--desc">{m.overview}</p>
 </div>
</div>
 )
}