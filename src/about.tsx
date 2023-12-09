import React from 'react';
import './navBar.css';
import './about.css'
import NavBar from './navBar';

function AboutPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div id="aboutpage">
        <center>
          <div id="prophoto">
            <img src="profilepicnew.png" width="800vw" height="800vh" />
          </div>
          <div id="profile"><h1> Profile </h1></div>
          <div id="details">
            <h2>About Me</h2>
            <p>I am a senior in the Engineering school at Cornell University majoring in Computer Science and
              minoring in Biological Engineering.
              However, if I could, I would major in all the STEM disciplines! I love to learn and apply new
              skills
              and I enjoy being challenged. After my undergraduate experience, I hope to pursue a job in industry at
              a cutting edge company. Please don't hesitate to reach out to me!</p>
          </div>
          <div id="aboutme">
            <big>
              <h2>Details</h2>
              <p><b>Name: </b></p>
              <p>Liam Barnes</p>
              <p></p>
              <p><b>Occupation: </b></p>
              <p>Software Engineer</p>
              <p></p>
              <p><b>Education:</b></p>
              <p>Bachelor's of Science, 
                Cornell Engineering</p>
            </big>
          </div>
        </center>
      </div>
    </div>
  )
}

export default AboutPage;
