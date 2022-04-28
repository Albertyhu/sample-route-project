import React from 'react'; 
import { Link } from "react-router-dom";
import './style/mystyle.css';

function App() {
  return (
      <div className="App">
          <div id = "main">
              <h1>Home</h1>
              <div id="navigationContainer">
                  <Link to="about"><div className="minorDarkBlueButton">Next</div></Link>
              </div>
           </div>
    </div>
  );
}

export default App;
