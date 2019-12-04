import React from 'react';
import {connect} from 'react-redux';


import { Spin, Icon } from 'antd';
import { MovieItem} from "../components/MovieItem";


export const  AllMovie =({movies,filteredMovies,filtered,loading}) => {
    if(loading)
        return <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />
                
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
    filteredMovies:state.data.filteredMovies,
    filtered:state.data.filtered,
    loading:state.loading.loading
});

export const AllMovieContainer = connect(mapStateToProps)(AllMovie);