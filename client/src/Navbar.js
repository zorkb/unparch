import './navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo-main-container">
                <img className="logo-main" src="https://i.ibb.co/GTnLrGK/unparch-main-logo-tan.png" alt="unparch logo" />
            </div>
            <div className="links">
                <a href="/create">Already have an account?</a>
            </div>
        </nav>
    );
}

export default Navbar;