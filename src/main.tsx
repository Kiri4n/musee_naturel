import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n"; // Import de la config

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flore from './pages/Flore/Flore.tsx';
import Faune from './pages/Faune/Faune.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/flore" element={<Flore />} />
                <Route path="/faune" element={<Faune/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
