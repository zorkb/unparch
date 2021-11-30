// import { useState } from 'react';
import NavbarSplash from '../components/NavbarSplash';
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
                        all in one place.
                    </span>
                </h1>
                <div className="button-containter">
                <Link className="page-button-big" to="/signup">
                    Get started for free
                </Link>
                </div>
            </div>

        </div>
    )
}

export default SplashPage;