import React from 'react';

import {FilmSession} from "./FilmSession";

export const FilmBox=({movieDate})=> {
    return movieDate.map((element)=>(
        <FilmSession key={element._id} session={element}></FilmSession>
    ))
};