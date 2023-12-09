import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div id="navigationbox">
        <div id="home">
          <h2><Link to="/">Home</Link></h2>
        </div>
        <div id="about">
          <h2><Link to="/about">About</Link></h2>
        </div>
        <div id="work">
          <h2><Link to="/specializations">Projects</Link></h2>
        </div>
        <div id="connect">
          <h2><Link to="https://www.linkedin.com/in/liam-barnes-364a04212">Connect</Link></h2>
        </div>
        <div id="contact">Contact Me</div>
        <div id="phone">(720)-548-8979</div>
        <div id="email">lnb49@cornell.edu</div>
        <div id="mario">
          <img src="staticMario.png" width="75px" height="75px" />
        </div>
        <div id="pipe2">
          <img src="mario-pipe-wallpaper-gimp.jpg" width="150px" height="150px" />
        </div>
      </div>
      <div id="sideboxright">
      </div>
    </div>
  );
}

export default NavBar;
