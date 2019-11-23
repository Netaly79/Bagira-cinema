import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import { MovieItem} from "../components/MovieItem";


export const  AllMovie =({movies}) => {
    console.log (movies);
    return (
        <Link to={`movie/${movies._id}`} className="films">
            {movies.map(item =>
            <MovieItem key={item._id} movie={item} />
            )}
        </Link>
    );
};

const mapStateToProps = (state) => ({
    movies:state.data.movies
});

export const AllMovieContainer = connect(mapStateToProps)(AllMovie);