import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <Link to="/signup">Sign out</Link>
            </div>
        </nav>
    );
}

export default Navbar;