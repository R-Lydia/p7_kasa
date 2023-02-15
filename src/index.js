// importer les bibliothèques React, ReactDOM et React Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// utiliser l'ID root de la page HTML
// gérer le routage avec BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
