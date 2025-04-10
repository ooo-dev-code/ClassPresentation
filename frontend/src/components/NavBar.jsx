import React from 'react'
import "./NavBar.css"
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FaSignInAlt, FaUserPlus, FaSignOutAlt, FaGamepad, FaStar } from 'react-icons/fa';

function NavBar() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return ( 
        <div className='navbar'>
            
            <a href="/home"><div className='logo'></div></a>

            {!user ? (
            <div>
                <a href="/"><button class="button-82-pushable" role="button" style={{backgroundColor: 'transparent'}}>
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                <FaSignInAlt /> Login
                </span>
                </button></a>
                <a href="/register">
                
                <button class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                <FaUserPlus /> Register
                </span>
                </button></a>
            </div>
            ) : (
            <div>
            

                <a href="/ratings"><button className='profile'><FaStar /></button></a>
                <button class="button-82-pushable" role="button" onClick={handleClick}>
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                <FaSignOutAlt /> Logout
                </span>
                </button>

            </ div>
        )}
        </div>
    )
}

export default NavBar
