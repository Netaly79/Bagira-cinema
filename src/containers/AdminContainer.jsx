import React from 'react';
import {connect} from 'react-redux';

import { Spin, Icon } from 'antd';
import {MovieInfo} from "../components/MovieInfo";


export const AdminFilms = ({loading, movies}) => {
   
    if(loading)
        return <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />
    
        const handleRemove = (movie) =>{

    }
    return(
        <div  className="films-info">
            {movies.map(item =>
            <MovieInfo key={item._id} movie={item} />
            )}
        </div>
    );

};
const mapStateToProps = (state) => ({
    movies:state.data.movies,
});

export const AdminContainer = connect(mapStateToProps)(AdminFilms);
