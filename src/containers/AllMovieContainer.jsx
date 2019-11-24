import React from 'react';
import {connect} from 'react-redux';



import { MovieItem} from "../components/MovieItem";


export const  AllMovie =({movies}) => {
    console.log (movies);
    return (
        <div  className="films">
            {movies.map(item =>
            <MovieItem key={item._id} movie={item} />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies:state.data.movies
});

export const AllMovieContainer = connect(mapStateToProps)(AllMovie);