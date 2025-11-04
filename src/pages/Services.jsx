const Services = () => {
  return (
    <div className="pt-18 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-5xl mb-4 text-yellow-400">Nuestros Servicios</h1>
          <p className="text-xl opacity-90">Música tradicional mexicana para cada ocasión especial</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Bodas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent hover:border-yellow-400">
            <div className="text-6xl mb-6 text-center">💒</div>
            <h2 className="font-serif text-2xl text-amber-800 mb-4 text-center">Bodas</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Haz de tu boda un momento mágico con nuestro repertorio romántico
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Ceremonia religiosa
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Entrada de novios
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Vals de novios
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Música durante la recepción
              </li>
            </ul>
            <div className="text-center py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-amber-800 font-bold text-lg rounded-xl">
              Desde $2,500 MXN
            </div>
          </div>

          {/* Quinceañeras */}
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent hover:border-yellow-400">
            <div className="text-6xl mb-6 text-center">👑</div>
            <h2 className="font-serif text-2xl text-amber-800 mb-4 text-center">Quinceañeras</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Celebra tus 15 años con la tradición y elegancia del mariachi
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Las Mañanitas
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Vals de honor
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Música durante la fiesta
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Canciones especiales
              </li>
            </ul>
            <div className="text-center py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-amber-800 font-bold text-lg rounded-xl">
              Desde $2,000 MXN
            </div>
          </div>

          {/* Serenatas */}
          <div className="bg-white p-8 rounded-2xl shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent hover:border-yellow-400 md:col-span-2 lg:col-span-1">
            <div className="text-6xl mb-6 text-center">🎵</div>
            <h2 className="font-serif text-2xl text-amber-800 mb-4 text-center">Serenatas</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-center">
              Sorprende a esa persona especial con una serenata inolvidable
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Repertorio personalizado
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Canciones románticas
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Duración flexible
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Disponible 24/7
              </li>
            </ul>
            <div className="text-center py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-amber-800 font-bold text-lg rounded-xl">
              Desde $1,500 MXN
            </div>
          </div>

        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="font-serif text-2xl text-amber-800 mb-4">¿Listo para contratar nuestros servicios?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para recibir una cotización personalizada y hacer de tu evento algo inolvidable
          </p>
          <button className="btn btn-primary text-lg px-12 py-4">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;