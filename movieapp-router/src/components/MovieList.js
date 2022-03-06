import React from 'react';
import MovieCard from "./MovieCard";


const MovieList = ({movies,search,searchRate}) => {
    
    const x = movies.filter(el => el.title.toUpperCase().includes(search.toUpperCase()) && el.rate >= searchRate).map(el=><MovieCard key = {el.id} el = {el}/>)
    return (
        <div className = "movieList">
        {
               x.length ?   x : <h1>Not Found</h1>
            }
           
        </div>
    )
};
export default MovieList;

