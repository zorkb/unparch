import React from "react";
import { Routes, Route } from "react-router-dom";

import SplashPage from '../pages/Splash';
import Signup from '../pages/Signup';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import UserHome from "../pages/UserHome";
import WellInfo from "../pages/WellInfo";
import TestData from "../pages/TestData"

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/userhome" element={<UserHome />} />
            <Route path="/wellinfo" element={<WellInfo />} />
            <Route path="/testdata" element={<TestData />} />
            <Route path="/" element={<SplashPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default SiteRoutes;