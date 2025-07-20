import "./Dropdown.css"
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
function Dropdown(){
    const [open,setopen]=useState(true);
    const disappear=()=>{
        setopen(false);
    }
    
    return (
        <div>
            {open && (
            <div className='dropdown'>
                <ul className='dropdown-menu'>
                    <NavLink to="/profile" style={{textDecoration:"none"}} onClick={disappear}><li >Profile</li></NavLink>
                    <NavLink to="login" style={{textDecoration:"none"}} onClick={disappear}><li>Login</li></NavLink>
                    <NavLink to="/signup" style={{textDecoration:"none"}} onClick={disappear}><li>Sign Up</li></NavLink>
                    <NavLink to="#" style={{textDecoration:"none"}} onClick={disappear}><li>Logout</li></NavLink>
                </ul>
            </div>
            )}
        </div>
    );
 }
 export default Dropdown;