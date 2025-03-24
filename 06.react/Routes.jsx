import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar.jsx';
import States from './src/components/States.jsx';
import Lists from './src/components/Lists.jsx';
import Landing from './src/components/Landing.jsx';
import DomExample from './src/components/DomExample.jsx';
import ComponentRendering from './src/components/ComponentRendering.jsx';
const RouteConfig = () => (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/states" element={<States />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/dom' element={<DomExample />} />
        <Route path='/render' element={<ComponentRendering />}/>
    </Routes>
);

export default RouteConfig;