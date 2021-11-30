import { Link } from 'react-router-dom'
import '../css/navbar.css';

const NavbarSignIn = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <Link className="nav-button" to="/signup">Create a new account</Link>
            </div>
        </nav>
    );
}

export default NavbarSignIn;