import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const routeToId = {
  '/': 'inicio',
  '/servicios': 'servicios',
  '/galeria': 'galeria',
  '/contacto': 'contacto',
  '/sobre-nosotros': 'sobre-nosotros',
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = routeToId[location.pathname];
    // pequeño delay para asegurar renderizado de la sección
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      {/* Secciones (cada componente exporta su own <section id="...">) */}
      <Services />

      <Gallery />

      <About />

      <Contact />
    </div>
  );
};

export default Home;