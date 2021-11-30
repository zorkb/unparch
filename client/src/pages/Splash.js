// import { useState } from 'react';
import NavbarSplash from '../components/NavbarSplash';
import { Link } from 'react-router-dom';
import '../css/splash.css';

const SplashPage = () => {
        
    return (
        <div className="splash-page">
            <NavbarSplash />
            <h1>
                Your land's well data - 
                <span className="callout">
                        all in one place.
                </span>
            </h1>

            <div className="big-button">
                <Link to="/signup">Get started for free</Link>
            </div>

        </div>
    )
}

export default SplashPage