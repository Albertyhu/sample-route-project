import React from 'react';
import "../style/mystyle.css"; 
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div id="main">
                <h1>About</h1>
                <div id ="navigationContainer">
                    <Link to="/"> <div class="minorDarkBlueButton">Back</div></Link>
                    <Link to="/company"><div class="minorDarkBlueButton">Next</div></Link>
                </div>
             </div>
         </div>
        )
}

export default About; 