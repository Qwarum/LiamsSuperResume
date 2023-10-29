import React from 'react';
import NavBar from './navBar';
import './bioeng.css'
import { Link } from 'react-router-dom';

function BEEPage() {
  return (
    <div>
      <NavBar></NavBar>
      <div id="bioengpage">
        <h1> Biological Engineering Experience</h1>
        <p>Cerapedics Paid Internship (35 hr/wk): <small> I tested cross reaction of
            Collagen type 1 antibodies with peptide 15,
            Bovine Collagen and c1q for the FDA. I also checked ELISA tests for the hook
            effect and wrote up a draft report of my
            results for the FDA.
          </small></p> 
          <br></br>
        <p>Thorne Biophysics Lab: <small> In the lab I have created crystals for protein
            crystalography, created microfluidics and
            performed photolithography in a clean room, became certified in the machine
            shop and run an experiment to determine the
            freezing time of different cryoprotectants.
          </small></p>
          <br></br>
        <p>Alzheimer's Research Project (View Poster <Link to="https://drive.google.com/file/d/1vp45XDx-yIxLfPtpylULrYzFPLB9d_af/view?usp=sharing">Here</Link>)
          <small> My two group members and I won first place in the Medicine and Health
            division
            in the Colorado state science fair by exploiting the surface plasmon
            resonance of gold nanoparticles under infrared light
            to denature beta secretase.
          </small>
        </p>
        <br></br>
        <p>Mars Rover Project Team: <small> Working on the Science subteam (elected subteam
            lead for 2022-2023) to determine whether
            samples contain extant or extinct life or none and to distinguish rocks.
          </small></p>
          <br></br>
        <div id="flower">
          <img src="fireflower.jpg" width="2500%" height="2500%" />
        </div>
      </div>
    </div>
  )
}

export default BEEPage;
