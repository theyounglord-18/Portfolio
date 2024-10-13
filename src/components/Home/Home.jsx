import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css'
import profile from '../../assets/home-profile-img.jpg';

const Home = () => {
  return (
    <div id="home" className='home'>
      <img src={profile} alt="profile" height="350px" width="300px"/>
      <h1><span>I'm Devender Narra</span>, Full stack Techie at NxtWave 4.0 Academy</h1>
      <div className='icons'>
         <a href="https://github.com/DevenderNarra"><FaGithub className='icon' /></a>
         <a href="https://www.linkedin.com/in/devender-narra-22605b230/"><FaLinkedinIn className='icon'/></a>
      </div>
      <div className='home-action'>
        <div className="home-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
        <div className="home-resume"><a className='anchor-link' href="https://drive.google.com/file/d/1txryvWR6YbUIM4yCKE_b1qcTr8LgE2YR/view?usp=sharing">My Resume</a></div>
      </div>
    </div>
  )
}

export default Home
