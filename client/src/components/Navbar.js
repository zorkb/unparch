import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <Link to="/signup">Create a new account</Link>
            </div>
        </nav>
    );
}

export default Navbar;