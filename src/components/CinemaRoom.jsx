import React from "react";

export const CinemaRoom =({space,handleBuyPlace}) => {
    return (
        <div className="room">
            {space.map ((item,k) => {
                return <div key={k} className="row">
                    <div className="row-number">Ряд: {k+1}</div>
                    {
                        item.map ((element,l) => {
                            return (
                                <div key={l}
                                 className={`place-${element.booked?"taken":"free"} place`}
                                 onClick={()=>handleBuyPlace(element)}
                                 >
                                    <span>{element.place}</span>
                                </div>
                            )
                        })
                    }
                    <div className="row-number">Ряд: {k+1}</div>
                </div>
            })
        
            }
        </div>
    )
};