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
          <h1> Profile </h1>
          <div id="prophoto">
            <img src="ProfessionalPhotoCircle.jpg" width="250vw" height="250vh" />
          </div>
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
              <h2>"Details"</h2>
              <p><b>Name: </b></p>
              <p>Liam Barnes</p>
              <p><b>Year: </b></p>
              <p>Senior</p>
              <p><b>Current Locations:</b></p>
              <p>Louisville, CO</p>
              <p>New York City, NY</p>
              <p>Ithaca, NY</p>
            </big>
          </div>
        </center>
      </div>
    </div>
  )
}

export default AboutPage;
