import React from  'react';
import {Link} from 'react-router-dom';

export const MovieItem =({movie}) => (
    <Link to={`movie/${movie._id}`} className="Movie-Item"> 
        <img className="movie-poster" src={movie.poster}  alt = "poster" />
        <p className="movie-title">{movie.title}</p>
    </Link>
)