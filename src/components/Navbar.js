import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // for mobile menu icon
import Dropdown from './Dropdown'; // make sure it's imported
import image from '../Images/profile.png';
import "./Navbar.css" // update with your image path

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggledownbar = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <div className="navbar-total-container" style={{position:"sticky", top:"0px"}}>
      {/* Desktop Nav */}
      <div className='nav-lap'>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink to="/contractor" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contractors</NavLink>
              <NavLink to="/service" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Service</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </div>
            <div className="navbar-right">
              <img src={image} alt="Profile" className="profile-img" onClick={() => setOpenProfile(prev => !prev)} />
            </div>
          </div>
        </nav>
        {openProfile && <Dropdown />}
      </div>

      {/* Mobile Nav */}
      <div className="nav-mob">
        <div className="mobile-header">
          <FaBars onClick={() => toggledownbar()} className="menu-icon" />
          <img src={image} alt="Profile" className="profile-img" onClick={() => setOpenProfile(prev => !prev)} />
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-closer">
              <FaTimes onClick={() => setMenuOpen(false)} className="close-icon" />
            </div>
            <hr style={{width:"100%",margin:"0px"}}/>
            <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/contractor" className="nav-link" onClick={() => setMenuOpen(false)}>Contractors</NavLink>
            <NavLink to="/service" className="nav-link" onClick={() => setMenuOpen(false)}>Service</NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
        )}
        {openProfile && <Dropdown />}
      </div>
    </div>
  );
}
