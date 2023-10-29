import React from 'react';
import './navBar.css';
import './compsci.css'
import NavBar from './navBar';

function CSPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div id="compscipage">
      </div>
      <div id="textfront">
        <h1> Computer Science Experience </h1>
        <h2>Languages: <small>Python, Java, MATLAB, C++ and C</small></h2>
        <h2>Relevent Coursework: <small> Intro to ML, OOP, Computer Systems Programming, Basic
            Algorithms,
            Basic Probability, Linear Algebra, Discrete Struct., Calc 1-3, Diff. Eq.
          </small></h2>
          <hr></hr> <br></br>
        <p>Mars Rover Project Team: <small> Working on the Science subteam (elected subteam lead
            for 2022-2023) to research a
            method to distinguish rocks using a computer algorithm and database based on
            rock luminescence or similar.
          </small></p>
        <br></br>
        <p>DIY Electroencephalogram (EEG): <small> I am currently following a DIY tutorial to
            build an EEG on a breadboard
            and code it. I am planning to experiment with making programs based on the alpha
            wave
            signals picked up by the device in the future.
          </small></p>
        <br></br>
        <p> Highlighted GitHub Project and LeetCode Competition Score <small>(Coming
            Soon!)</small>: <small> An encompassing project that I am finishing based
            on the techniques I learned in machine learning.
          </small></p>
        <br></br>
        <p> Website/Super Resume: <small> I created this website using html and CSS to learn new
            skills for
            future projects using front-end development.
          </small></p>
      </div>
      <div id="lakitu1">
          <img src="lakitu.jpg" width="90px" height="130px" />
        </div>
        <div id="lakitu2">
          <img src="lakitu.jpg" width="90px" height="130px" />
        </div>
    </div>
  )
}

export default CSPage;

