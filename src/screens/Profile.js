import React from 'react';
import "../style/mystyle.css";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div id="main">
            <h1>Profile</h1>
                <div id ="navigationContainer">
                    <Link to="/contact"> <div class ="minorDarkBlueButton">Back</div></Link>
                
                </div>
                </div>
        </div>)
}

export default Profile; 