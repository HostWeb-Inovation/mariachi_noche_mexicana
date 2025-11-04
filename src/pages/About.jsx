

const About = () => {
  return (
    <div className="pt-18 min-h-screen">
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-5xl mb-4 text-yellow-400">Sobre Nosotros</h1>
          <p className="text-xl opacity-90">Conoce la historia y pasión detrás de Mariachi Noche Mexicana</p>
        </div>
      </div>

      <div className="container-custom">
        <section className="py-12 border-b border-gray-200">
          <h2 className="font-serif text-3xl text-amber-800 mb-8">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-4xl">
            Fundado en 2008, Mariachi Noche Mexicana ha sido la elección 
            número uno para eventos especiales en toda la región. Con más de 
            15 años de experiencia, hemos participado en cientos de bodas, 
            quinceañeras, serenatas y eventos corporativos.
          </p>
        </section>

        <section className="py-12">
          <h2 className="font-serif text-3xl text-amber-800 mb-8">Nuestros Integrantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-30 h-30 rounded-full bg-gray-300 mx-auto mb-4 border-4 border-yellow-400"></div>
              <h3 className="font-serif text-amber-800 mb-2">José María González</h3>
              <p className="text-gray-600 font-medium">Director Musical - Violín</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-30 h-30 rounded-full bg-gray-300 mx-auto mb-4 border-4 border-yellow-400"></div>
              <h3 className="font-serif text-amber-800 mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-600 font-medium">Guitarrón</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-30 h-30 rounded-full bg-gray-300 mx-auto mb-4 border-4 border-yellow-400"></div>
              <h3 className="font-serif text-amber-800 mb-2">Miguel Hernández</h3>
              <p className="text-gray-600 font-medium">Trompeta</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;