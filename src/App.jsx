import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            {/* Todas las rutas principales renderizan Home (single page) */}
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Home />} />
            <Route path="/galeria" element={<Home />} />
            <Route path="/contacto" element={<Home />} />
            <Route path="/sobre-nosotros" element={<Home />} />
            {/* si quiere mantener rutas antiguas por compatibilidad, las deja apuntando a Home */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
