import axios from 'axios';
import {loadingError} from './general';
import { URL_SESSION, SET_SESSION,URL_ROOMS,SET_ROOMS}  from '../constants';

export const setSessions = (sessions) =>({
 type: SET_SESSION, payload: sessions
});
export const setRooms = (rooms) =>({
    type: SET_ROOMS, payload: rooms
   });
export const getSessions = () =>{
    return (dispatch) => {
        //dispatch(isLoading());
        Promise.all([axios.get (URL_SESSION),axios.get (URL_ROOMS)])
        .then (([sessions,rooms]) => {
           dispatch(setSessions(sessions.data.session));
           dispatch(setRooms(rooms.data.rooms));
            
        })
        .catch ((error) => {
            console.log(error);
            dispatch(loadingError());
        }) 
     }
        
}
