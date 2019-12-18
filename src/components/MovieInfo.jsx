import React from 'react';

import { MovieItem} from "../components/MovieItem";

export const MovieInfo = ({key,movie,handleRemove}) => {
    const id=movie._id;
    const handleButtonRemove=(event) =>{
        handleRemove(id);
       
    }
    return (
        <div className="movie-card">
            <MovieItem movie={movie}/>
            <button className="remove-button" onClick={handleButtonRemove}> Remove film</button>
            
        </div>
    )
    
}