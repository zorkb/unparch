import { Link } from 'react-router-dom';
import '../css/navbar.css';

const NavbarSplash = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <Link to="/signin">Sign in</Link>
                <Link className="nav-button" to="/signup">Get started for free</Link>
            </div>
        </nav>
    );
}

export default NavbarSplash;