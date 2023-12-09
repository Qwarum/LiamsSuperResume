import React from 'react';
import NavBar from './navBar';
import './bioeng.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function BEEPage() {

    // const [boxVisible, setBoxVisible] = useState(false);
    const [bboxVisible, bsetBoxVisible] = useState([false,false,false,false])

    // const toggleBox = () => {
    //   setBoxVisible(!boxVisible);
    // };
  
    const btoggleBox1 = () => {
      bsetBoxVisible([true,false,false,false]);
    };
    const btoggleBox2 = () => {
      bsetBoxVisible([false,true,false,false]);
    };
    const btoggleBox3 = () => {
      bsetBoxVisible([false,false,true,false]);
    };
    const btoggleBox4 = () => {
      bsetBoxVisible([false,false,false,true]);
    };


  return (
    <div>
      <NavBar></NavBar>
      <div id="bioengpage">
        <h1> Biological Engineering Experience</h1>
        <div id="flower">
            <img src="fireflower.jpg" width="2500%" height="2500%" />
          </div>
        <button onClick={btoggleBox1} className="bbutton1">Cerapedics Internship</button>
          {bboxVisible && <div className="bbox"><h3>I tested cross reaction of
            Collagen type 1 antibodies with peptide 15,
            Bovine Collagen and c1q for the FDA. I also checked ELISA tests for the hook
            effect and wrote up a draft report of my
            results for the FDA.
            </h3></div>}
          <button onClick={btoggleBox2} className='bbutton2'>Thorne Biophysics Lab</button>
          {bboxVisible[1] && <div className="bbox"><h3>In the lab I have created crystals for protein
            crystalography, created microfluidics and
            performed photolithography in a clean room, became certified in the machine
            shop and run an experiment to determine the
            freezing time of different cryoprotectants.</h3></div>}
          <button onClick={btoggleBox3} className='bbutton3'>Alzheimer's Research Project</button>
          {bboxVisible[2] && <div className="bbox"><h3>My two group members and I won first place in the Medicine and Health
            division
            in the Colorado state science fair by exploiting the surface plasmon
            resonance of gold nanoparticles under infrared light
            to denature beta secretase. View Poster <Link to="https://drive.google.com/file/d/1vp45XDx-yIxLfPtpylULrYzFPLB9d_af/view?usp=sharing">Here</Link></h3></div>}
          <button onClick={btoggleBox4} className='bbutton4'>Cornell Mars Rover Project Team</button>
          {bboxVisible[3] && <div className="bbox"><h3>Working on the Science subteam (elected subteam
            lead for 2022-2023) to determine whether
            samples contain extant or extinct life or none and to distinguish rocks.</h3></div>}
        {/* <p>Cerapedics Paid Internship (35 hr/wk): <small> I tested cross reaction of
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
          <br></br> */}
      </div>
    </div>
  )
}

export default BEEPage;
