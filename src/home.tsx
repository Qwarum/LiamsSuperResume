import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div id="scroll">
        <h2><Link to="/about">Click to Start</Link></h2>
      </div>
      <div id="mario1">
        <img src="mario.gif" width="150px" height="150px" />
      </div>
      <div id="coin1">
        <img src="coin.gif" width="50px" height="50px"/>
      </div>
      <div id="coin2">
        <img src="coin.gif" width="50px" height="50px" />
      </div>
      <div id="coin3">
        <img src="coin.gif" width="50px" height="50px" />
      </div>
      <div id="coin4">
        <img src="coin.gif" width="50px" height="50px" />
      </div>
      <div id="coin5">
        <img src="coin.gif" width="50px" height="50px" />
      </div>
      <div id="coin6">
        <img src="coin.gif" width="50px" height="50px" />
      </div>
      <div id="pipe">
        <img src="mario-pipe-wallpaper-gimp.jpg" width="150px" height="150px" />
      </div>
      <div id="super">
        <img src="liamsresume.jpg" width="10000%" height="200px" />
      </div>
    </div>
  )
}

export default HomePage;
