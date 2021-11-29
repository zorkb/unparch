import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarSplash = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <a href="/create">Sign in</a>
                <a className="nav-button" href="/create">Get started for free</a>
            </div>
        </nav>
    );
}

export default NavbarSplash;