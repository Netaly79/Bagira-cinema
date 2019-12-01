import axios from 'axios';
import { URL_MOVIE, SET_MOVIES, SET_FILTERED_MOVIES}  from '../constants';
import {isLoading,loadingError} from './general';


export const setMovies = ( movies) =>({
 type: SET_MOVIES, payload: movies
});

export const getMovies = () =>{
    return (dispatch) => {
        dispatch(isLoading());
        axios.get(URL_MOVIE)
        .then (({data}) => {
            dispatch(setMovies(data.movie));
        })
        .catch ((error) => {
            console.log(error);
            dispatch(loadingError());
        }) 
     }
        
}
export const setFilteredMovies = ( filteredMovies, filtered) =>({
    type: SET_FILTERED_MOVIES, payload: filteredMovies, filtered:filtered
   });
