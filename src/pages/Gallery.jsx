import React from 'react';

const Gallery = () => {
  return (
    <section id="galeria" className="pt-18 bg-black text-white">
      {/* Header Section */}
      <div className="py-16 text-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl sm:text-5xl mb-2 text-amber-400">Galería</h1>
          <p className="text-lg text-gray-300">Revive los mejores momentos de nuestras presentaciones</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-800 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gray-800 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">📸</span>
                  <p className="text-sm font-medium text-gray-300">Imagen {index + 1}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 w-full">
                    <h3 className="font-serif text-lg font-bold mb-1">Evento {index + 1}</h3>
                    <p className="text-sm opacity-90">Descripción del evento musical</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-serif text-2xl text-white mb-4">¿Te gustó lo que viste?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Estos son solo algunos de los momentos especiales que hemos creado. Permítenos ser parte de tu historia también.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-amber-400 text-black font-semibold rounded-lg px-8 py-3 hover:bg-amber-500 transition-colors"
          >
            Contratar Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;