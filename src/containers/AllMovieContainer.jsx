import React from 'react';
import {connect} from 'react-redux';



import { MovieItem} from "../components/MovieItem";


export const  AllMovie =({movies,filteredMovies,filtered}) => {
    const renderMovies=(filteredMovies.length||filtered)
    ?filteredMovies
    : movies;

    return (
        <div  className="films">
            {renderMovies.map(item =>
            <MovieItem key={item._id} movie={item} />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    movies:state.data.movies,
    genres:state.data.genres,
    filteredMovies:state.filter.filteredMovies,
    filtered:state.filter.filtered
});

export const AllMovieContainer = connect(mapStateToProps)(AllMovie);