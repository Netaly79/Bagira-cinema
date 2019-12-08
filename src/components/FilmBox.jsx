import React from 'react';

import {FilmSession} from "./FilmSession";

export const FilmBox=({movieDate,id})=> {
    console.log ("s",{movieDate});
    return movieDate.map((element)=>(
        <FilmSession key={element._id} session={element}></FilmSession>
      
        //  {element.movie[_id]===this.props.id
        // ?<FilmSession key={element._id} session={element}></FilmSession>
        //  :<div></div>}
    ))
};