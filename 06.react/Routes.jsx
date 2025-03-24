import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar.jsx';
import States from './src/components/States.jsx';
import Lists from './src/components/Lists.jsx';
import Landing from './src/components/Landing.jsx';
const RouteConfig = () => (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/states" element={<States />} />
        <Route path='/lists' element={<Lists />} />
    </Routes>
);

export default RouteConfig;