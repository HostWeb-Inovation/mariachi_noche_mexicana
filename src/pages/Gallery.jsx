import React from 'react';
import ImageGallery from '../components/ImageGallery';

const Gallery = () => {
  return (
    <section id="galeria" className="pt-18 bg-black text-white">
      {/* Header Section */}
      <div className="py-16 text-center border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 text-amber-400 animate-in slide-in-from-top duration-1000">
            Galería
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-300">
            Revive los mejores momentos de nuestras presentaciones y siéntete parte de la magia del mariachi mexicano
          </p>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-400/70 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-amber-400/40 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <ImageGallery />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
          <div className="relative bg-gradient-to-r from-amber-400/10 via-orange-400/15 to-amber-400/10 rounded-3xl p-8 md:p-12 border border-amber-400/30 backdrop-blur-sm overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-20 h-20 border border-amber-400/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-amber-400/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-amber-400 rounded-full animate-ping delay-1500"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-6 animate-in slide-in-from-left duration-800 delay-900">
                ¿Te gustó lo que viste?
              </h3>
              <p className="text-gray-300 mb-10 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed animate-in slide-in-from-right duration-800 delay-1000">
                Estos son solo algunos de los momentos especiales que hemos creado para nuestros clientes. 
                Cada presentación es única y memorable. <span className="text-amber-400 font-medium">Permítenos ser parte de tu historia también.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in zoom-in duration-500 delay-1200">
                <a
                  href="#contacto"
                  className="group inline-flex items-center bg-amber-400 text-black font-bold rounded-xl px-8 py-4 hover:bg-amber-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-400/25"
                >
                  <span>Contratar Ahora</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#servicios"
                  className="group inline-flex items-center border-2 border-amber-400 text-amber-400 font-bold rounded-xl px-8 py-4 hover:bg-amber-400 hover:text-black hover:border-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25"
                >
                  <span>Ver Servicios</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;