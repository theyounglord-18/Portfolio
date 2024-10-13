import React, { useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navbar.css'
import logo from '../../assets/Dev_logo.jpg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    
const menuRef=useRef();

const openMenu=()=>{
  menuRef.current.style.right="0";
}

const closeMenu=()=>{
  menuRef.current.style.right="-350px"
}

  return (
    <div className='Navbar'>
      <img src={logo} alt="DEV"/>
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <AnchorLink className="anchor-link" offset={50} href="#home"><li>Home</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about"><li >About Me</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#projects"><li >Projects</li></AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#contact"><li>Contact</li></AnchorLink>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
