import React from 'react';
import "../style/mystyle.css";
import { Link } from "react-router-dom";

const Company = () => {
    return (
        <div>
            <div id="main">
            <h1>Company</h1>
                <div id ="navigationContainer">
                    <Link to="/about"> <div class ="minorDarkBlueButton">Back</div></Link>
                        <Link to="/contact"> <div class ="minorDarkBlueButton">Next</div></Link>
                </div>
            </div>
        </div>)
}

export default Company; 