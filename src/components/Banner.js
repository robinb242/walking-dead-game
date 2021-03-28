import React from "react";
import './Banner.css';


let bannerText = {
   
    backgroundImage: 'url("/assets/deadBanner3.png")',
    backgroundSize: 1142,
    backgroundPositionY: 0,
    height: 161,
    paddingTop: 125,
    paddingRight: 100,
    

    
};

const Banner = () =>

<div className="bannerContainer">

    <div className="row"  style={bannerText}>
        <div className="col-lg-12">
        </div>
    </div>
</div> 
    
export default Banner;
