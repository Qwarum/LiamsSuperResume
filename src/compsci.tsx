import React from 'react';
import './navBar.css';
import './compsci.css'
import NavBar from './navBar';
import { useState } from 'react';

function CSPage() {

  // const [boxVisible, setBoxVisible] = useState(false);
  const [boxVisible, setBoxVisible] = useState([false,false,false,false,false])

  // const toggleBox = () => {
  //   setBoxVisible(!boxVisible);
  // };

  const toggleBox1 = () => {
    setBoxVisible([true,false,false,false,false]);
  };
  const toggleBox2 = () => {
    setBoxVisible([false,true,false,false,false]);
  };
  const toggleBox3 = () => {
    setBoxVisible([false,false,true,false,false]);
  };
  const toggleBox4 = () => {
    setBoxVisible([false,false,false,true,false]);
  };
  const toggleBox5 = () => {
    setBoxVisible([false,false,false,false,true]);
  };


  return (
    <div>
      <NavBar></NavBar>
      <div id="compscipage">
        <button onClick={toggleBox1} className="button1">Classes and Coursework</button>
        {boxVisible && <div className="box"><h3>Languages: Python, Java, MATLAB, C++ and C.
        Relevent Coursework: Intro to ML, OOP, Computer Systems Programming, Basic
            Algorithms,
            Basic Probability, Linear Algebra, Discrete Struct., Calc 1-3, Diff. Eq.
          </h3></div>}
        <button onClick={toggleBox2} className='button2'>Mars Rover Project Team</button>
        {boxVisible[1] && <div className="box"><h3>Working on the Science subteam (elected subteam lead
            for 2022-2023) to research a
            method to distinguish rocks using a computer algorithm and database based on
            rock luminescence or similar.</h3></div>}
        <button onClick={toggleBox3} className='button3'>DIY Electroencephalogram</button>
        {boxVisible[2] && <div className="box"><h3>I am currently following a DIY tutorial to
            build an EEG on a breadboard
            and code it. I am planning to experiment with making programs based on the alpha
            wave
            signals picked up by the device in the future.</h3></div>}
        <button onClick={toggleBox4} className='button4'>Machine Learning GitHub Project</button>
        {boxVisible[3] && <div className="box"><h3>(Coming
            Soon!) An encompassing project that I am finishing based
            on the techniques I learned in machine learning.</h3></div>}
        <button onClick={toggleBox5} className='button5'>Personal Website/Super Resume</button>
        {boxVisible[4] && <div className="box"><h3>I created this website using html and CSS to learn new
            skills for
            future projects using front-end development.</h3></div>}
        <div id="textfront">
        <h1> Computer Science </h1>
        </div>
        <div id="lakitu1">
            <img src="lakitu.jpg" width="90px" height="130px" />
          </div>
          <div id="lakitu2">
            <img src="lakitu.jpg" width="90px" height="130px" />
          </div>
      </div>
        {/* <h2>Languages: <small>Python, Java, MATLAB, C++ and C</small></h2>
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
          </small></p> */}
    </div>
  )
}

export default CSPage;

