import React from 'react';

import {FilmSession} from "./FilmSession";

export const FilmBox=({movieDate,id})=> {
    console.log ("s",{movieDate});
    if (id){
    return movieDate.map((element)=>(
          element.movie._id===id
         ?<FilmSession key={element._id} session={element}></FilmSession>
          :<div></div>
    ))
    }
    return movieDate.map((element)=>(
        <FilmSession key={element._id} session={element}></FilmSession>
    ))
};