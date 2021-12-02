import React from "react";
import { Routes, Route } from "react-router-dom";

import SplashPage from '../pages/Splash';
import Signup from '../pages/Signup';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import CreateWell from "../pages/CreateWell";
import AddTestData from "../pages/AddTestData"

const SiteRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/create-well" element={<CreateWell />} />
            <Route path="/edit-well/:id" element={<UpdateWellInfo />} />
            <Route path="/show-well/:id" element={<ShowWellDetails />} />
            <Route path="/add-test-data" element={<AddTestData />} />
            <Route exact path="/" element={<SplashPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default SiteRoutes;