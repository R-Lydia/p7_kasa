import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import Error from './pages/404';


function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/logement/:id' element={<Logement />} />
                <Route path='/apropos' element={<Apropos />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default Router;