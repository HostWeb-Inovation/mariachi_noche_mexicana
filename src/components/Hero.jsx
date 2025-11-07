import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black bg-[url('/images/Mariachi-hero.jpg')] bg-cover bg-center"
      aria-label="Hero - La Esencia de México en Cada Nota"
    >
      {/* Dark overlay to ensure background is black and text readable */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
          La Esencia de México en Cada Nota
        </h1>

        <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl">
          Música tradicional para tus eventos más especiales.
        </p>

        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-md px-6 py-3 shadow-lg transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Decorative bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-36  from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;