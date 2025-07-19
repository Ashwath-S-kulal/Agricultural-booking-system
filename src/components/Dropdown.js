import "./Dropdown.css"
import { NavLink } from 'react-router-dom';
function Dropdown(){
    return (
        <div className='dropdown'>
            <ul className='dropdown-menu'>
                <NavLink to="/profile" style={{textDecoration:"none"}}><li >Profile</li></NavLink>
                <NavLink to="login" style={{textDecoration:"none"}}><li>Login</li></NavLink>
                <NavLink to="/signup" style={{textDecoration:"none"}}><li>Sign Up</li></NavLink>
                <NavLink to="#" style={{textDecoration:"none"}}><li>Logout</li></NavLink>
            </ul>
        </div>
    );
 }
 export default Dropdown;