import axios from 'axios';
import {isLoading,loadingError} from './general';
import { URL_SESSION, SET_SESSION}  from '../constants';

export const setSession = (session) =>({
 type: SET_SESSION, payload: session
});

export const getSession = () =>{
    return (dispatch) => {
        dispatch(isLoading());
        axios.get(URL_SESSION)
        .then (({data}) => {
            dispatch(setSession(data.session));
            console.log(data);
        })
        .catch ((error) => {
            console.log(error);
            dispatch(loadingError());
        }) 
     }
        
}
