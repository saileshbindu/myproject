import React from "react";
import phoneimg from '../../assets/hero_headphones.png';
import './herosection.css';


const Herosection = () =>{
    return(<div className="heroSection">
        <h1>
           100 Thousand Songs, ad-free Over thousands podcast episodes
           </h1>
           <img src={phoneimg} alt="Head Phone"/>
        
    </div>)
}

export default Herosection