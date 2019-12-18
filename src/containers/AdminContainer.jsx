import React from 'react';
import {connect} from 'react-redux';

import { Spin, Icon } from 'antd';
import {MovieInfo} from "../components/MovieInfo";
import {setAdminedMovies} from "../actions"


export const AdminFilms = ({loading, movies,setAdminedMovies}) => {
 
    if(loading)
        return <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 36 }} spin />} />
    

        const handleRemove = (id) =>{
          
            let adminedMovies=movies.filter(function(item) {
                if(item._id!==id)
                return item;
              });
           
            setAdminedMovies(adminedMovies);

    }
    return(
        <div  className="films-info">
            {movies.map(item =>
            <MovieInfo key={item._id} movie={item} handleRemove={handleRemove} />
            )}
        </div>
    );

};
const mapStateToProps = (state) => ({
    movies:state.data.movies
});
const mapDispatchToProps = {
    setAdminedMovies
};

export const AdminContainer = connect(mapStateToProps,mapDispatchToProps)(AdminFilms);
