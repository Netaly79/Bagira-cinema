import React from 'react';


export const FilmSession = ({session}) => {
    console.log ("session",session,session.movie);
    const  room=session.room==="green"
            ? "зеленый"
            : "желтый";
    const printColor=session.room==="green"
    ? "white"
    : "black";
    const roomColor=session.room;

    const hour=new Date (session.date).getHours()<10
        ? "0"+new Date (session.date).getHours()
        : new Date (session.date).getHours();
    const minute=new Date (session.date).getMinutes()<10
        ? "0"+new Date (session.date).getMinutes()
        : new Date (session.date).getMinutes();
    const time=hour+":"+minute;

    return (
    <div className="film-session">
        <div className="film-info">
            <img className="schedule-poster" src={session.movie.poster} alt="movie-poster"/>
            <button className="buy-ticket-sched">Купить билет</button>
        </div>
        <div className="session-film-info">
            <h3 className="session-film-title">{session.movie.title}</h3>
            <div className="room" 
            style={{backgroundColor:roomColor, color:printColor}}> Зал: {room} </div>
            <div class="session-time">{time}</div>
        </div>
         
        <div className="film-desc">
            <p>{session.movie.description}</p>
        </div> 
    </div>
)};