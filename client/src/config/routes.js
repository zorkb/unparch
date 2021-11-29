import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from './Splash';

const Routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routes;