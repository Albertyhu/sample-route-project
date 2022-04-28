import React from 'react';
import "../style/mystyle.css";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div id="main">
            <h1>Contact</h1>
                <div id ="navigationContainer">
                    <Link to="/company"> <div class ="minorDarkBlueButton">Back</div></Link>
                        <Link to="/profile"> <div class ="minorDarkBlueButton">Next</div></Link>
                </div>
                </div>
        </div>)
}

export default Contact; 