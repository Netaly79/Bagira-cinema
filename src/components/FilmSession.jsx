import React, {useState} from 'react';

import {ModalBuying} from './ModalBuying';
import { getTime } from '../library/functionLibrary';

export const FilmSession = ({session}) => {
    const [showModal,setShow]=useState(false);

    const  room=session.room==="green"
            ? "зеленый"
            : "желтый";

    const printColor=session.room==="green"
        ? "white"
        : "black";

    const roomColor=session.room;
    const time=getTime(session.date);

    const handleClickBuyTicket= () => {
        setShow(!showModal);
    };

    return (
        <React.Fragment>
            <div className="film-session">
                <div className="film-info">
                    <img className="schedule-poster" src={session.movie.poster} alt="movie-poster"/>
                    <button className="buy-ticket-sched" onClick={handleClickBuyTicket}>Купить билет</button>
                </div>
                <div className="session-film-info">
                    <h3 className="session-film-title">{session.movie.title}</h3>
                    <div className="room" 
                    style={{backgroundColor:roomColor, color:printColor}}> Зал: {room} </div>
                    <div className="session-time">{time}</div>
                </div>
                <div className="film-desc">
                    <p>{session.movie.description}</p>
                </div> 
            </div>
                { showModal&&<ModalBuying session={session} 
                handleCloseModalBox={handleClickBuyTicket}
            />}
    </React.Fragment>
)};