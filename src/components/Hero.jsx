import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black bg-[url('/images/Mariachi-hero.jpg')] bg-cover bg-center pt-20 md:pt-0"
      aria-label="Hero - La Esencia de México en Cada Nota"
    >
      {/* Dark overlay to ensure background is black and text readable */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-6 md:transform md:-translate-y-6">
        <h1 className="font-serif text-white lg:whitespace-nowrap whitespace-normal text-[clamp(1.05rem,4.5vw,1.6rem)] md:text-[clamp(1.45rem,4.5vw,2.6rem)] lg:text-[clamp(2.75rem,4.2vw,5rem)] font-extrabold leading-tight drop-shadow-lg max-w-full mx-auto tracking-tight">
          La Esencia de México en Cada Nota
        </h1>

        <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg">
          Música tradicional para tus eventos más especiales.
        </p>

        <div className="mt-6 md:mt-8">
          <a
            href="https://wa.me/525527060009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-md px-5 py-2 md:px-6 md:py-3 shadow-lg transition-colors"
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