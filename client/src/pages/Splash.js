// import { useState } from 'react';
import NavbarSplash from '../components/NavbarSplash';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/splash.css';

const SplashPage = () => {
        
    return (
        <div className="splash-page">
            <NavbarSplash />

            <div className="splash-page-top">
                <h1 className="tagline">
                    Your land's well data -&nbsp;  
                    <span className="callout">
                        all in one place <span className="period">.</span>
                    </span>
                </h1>
                <div className="button-container">
                <Link className="page-button-big" to="/signup">
                    Get started for free
                </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SplashPage;