import React from 'react';

import {getDate,getTime} from "../library/functionLibrary"


export const TicketSelectBox = ({session}) => {
    const  room=session.room==="green"
            ? "зеленый"
            : "желтый";
    const printColor=session.room==="green"
    ? "white"
    : "black";  
    
        const date=getDate(session.date);
        const time=getTime(session.date);
        const datetime=date+"   "+time;

    return(
        <div>
            <h3 className="modal-film-title"> {session.movie.title} </h3>
            <div className="date-time">
                <div className="modal-room room" style={{backgroundColor:session.room, color:printColor}}> Зал: {room} </div>
                <div className=" modal-session-time"
                style={{backgroundColor:session.room, color:printColor}}>{datetime}</div>
            </div>
        </div>
)
}