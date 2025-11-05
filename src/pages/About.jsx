import React from 'react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="pt-18 bg-black text-white">
      <div className="py-16 text-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl sm:text-5xl mb-2 text-amber-400">Sobre Nosotros</h1>
          <p className="text-lg text-gray-300">Conoce la historia y pasión detrás de Mariachi Noche Mexicana</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <section className="py-12 border-b border-gray-800">
          <h2 className="font-serif text-3xl text-white mb-8">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed text-gray-400 max-w-4xl">
            Fundado en 2008, Mariachi Noche Mexicana ha sido la elección número uno para eventos especiales en toda la región. Con más de 15 años de experiencia, hemos participado en cientos de bodas, quinceañeras, serenatas y eventos corporativos.
          </p>
        </section>

        <section className="py-12">
          <h2 className="font-serif text-3xl text-white mb-8">Nuestros Integrantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">José María González</h3>
              <p className="text-gray-400 font-medium">Director Musical - Violín</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-400 font-medium">Guitarrón</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">Miguel Hernández</h3>
              <p className="text-gray-400 font-medium">Trompeta</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;