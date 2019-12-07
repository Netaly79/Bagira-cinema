import React from "react";
import logo from "../assets/images/Bagira.jpg"

export const Banner = () => (
    <div className="banner-container">
        <div className="banner">
            <img src={logo} alt="Bagira.jpg" />
            <h3 className="banner-slogan">BagiraCinema - <br />смотрите кино уютно</h3>
        </div>
    </div>
);