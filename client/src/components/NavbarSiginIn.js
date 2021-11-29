import { Link } from 'react-router-dom'
import './navbar.css';

const NavbarSignIn = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <a href="/create">Create a new account</a>
            </div>
        </nav>
    );
}

export default NavbarSignIn;