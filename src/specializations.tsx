import React from 'react';
import ReactDOM from 'react-dom/client';
import './specializations.css'
import { Link } from 'react-router-dom';

function SpecPage() {
  return (
    <div>
      <center>
        <div id="quote">
          <div className="typewriter">
            <h2>Science is Magic that Works</h2>
            <h2><small>- Kurt Vonnegut</small></h2>
          </div>
        </div>
      </center>
      <div id="compsci">
        <img src="csnodes.jpg" width="75%" height="25%" />
        <div id="compsciwrite">
          <h1><Link to="/compsci">Computer Science</Link></h1>
        </div>
      </div>
      <div id="bioeng">
        <img src="garden.jpg" width="75%" height="25%" />
        <div id="bioengwrite">
          <h1><Link to="/bioeng">Bio-Engineering</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default SpecPage;
