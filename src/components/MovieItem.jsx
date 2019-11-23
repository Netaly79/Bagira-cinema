import React from  'react';

export const MovieItem =({movie}) => (
    <div className="Movie-Item"> 
        <img className="movie-poster" src={movie.poster}  alt = "poster" />
        <p className="movie-title">{movie.title}</p>
    </div>
)