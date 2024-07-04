// index.js o App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tailwind.css'; // Importa tu archivo de estilos Tailwind
import App from './App';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);