import React from "react";

export const CinemaRoom =({space,handleBuyPlace,session}) => {
    const cost=session.costs;
    return (
        <div className="room">
            <div className="legend">
            <span className=" place-taken">Занято</span>
            <span id="akcent"> Цена билета: {cost} грн.</span>
            <span className="place-free">Свободно</span>
        </div>
            { space.map ((item,k) => {
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