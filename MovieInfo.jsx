import React from 'react';

import { MovieItem} from "../components/MovieItem";

export const MovieInfo = ({movie,handleRemove}) => {

    const handleButtonRemove=(event) =>{
        console.log(event);
    }
    return (
        <div className="movie-card">
            <MovieItem movie={movie}/>
            <button className="remove-button" onClick={handleButtonRemove}> Remove</button>
        </div>
    )
    
}