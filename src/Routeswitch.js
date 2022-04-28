import React from 'react'; 
import App from './App.js'; 
import About from './screens/About.js';
import Company from './screens/Company.js'; 
import Contact from './screens/Contact.js'; 
import Profile from './screens/Profile.js'; 
import './style/mystyle.css'; 

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitcher = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/company" element={<Company />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter> 
        )
}

export default RouteSwitcher; 