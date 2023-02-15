// configurer les routes pour la navigation du site

// importer React, React Router, les pages et composant Layout(modèle)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Apropos from './pages/Apropos';
import Error from './pages/404';
import Layout from './components/Layout';


// spécifier les chemins pour atteindre les différentes pages
function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/logement/:id' element={<Logement />} />
                    <Route path='/apropos' element={<Apropos />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </>
    )
};

export default App;