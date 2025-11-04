import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Sección de Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent">
              <div className="text-5xl mb-4">💒</div>
              <h3 className="font-serif text-xl text-amber-800 mb-4">Bodas</h3>
              <p className="text-gray-600 leading-relaxed">Música romántica para el día más especial de tu vida</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="font-serif text-xl text-amber-800 mb-4">Quinceañeras</h3>
              <p className="text-gray-600 leading-relaxed">Celebra tus 15 años con la tradición mexicana</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="font-serif text-xl text-amber-800 mb-4">Serenatas</h3>
              <p className="text-gray-600 leading-relaxed">Sorprende con una serenata inolvidable</p>
            </div>
            <div className="bg-white p-8 rounded-2xl text-center shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/20 border-2 border-transparent">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-serif text-xl text-amber-800 mb-4">Eventos Corporativos</h3>
              <p className="text-gray-600 leading-relaxed">Ameniza tus eventos empresariales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="p-4">
              <h2 className="section-title text-left">
                ¿Quiénes Somos?
                <span className="after:left-0 after:transform-none"></span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-6">
                Somos un grupo mariachi profesional con más de 15 años de experiencia 
                llevando la auténtica música mexicana a eventos especiales.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Nuestro repertorio incluye las canciones más hermosas de la música 
                mexicana, desde rancheras tradicionales hasta boleros románticos.
              </p>
              <button className="btn btn-primary">Conocer Más</button>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md h-75 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-500 text-lg">
                <p>Foto del Grupo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-gradient-to-br from-amber-800 to-amber-900 text-white">
        <div className="container-custom">
          <h2 className="section-title text-yellow-400">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-md border border-yellow-400/20 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg leading-relaxed mb-4 italic">"Increíble experiencia, hicieron de nuestra boda algo mágico"</p>
              <cite className="text-yellow-400 font-semibold not-italic">- María & Carlos</cite>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-md border border-yellow-400/20 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg leading-relaxed mb-4 italic">"Profesionales, puntuales y con una música espectacular"</p>
              <cite className="text-yellow-400 font-semibold not-italic">- Ana García</cite>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl text-center backdrop-blur-md border border-yellow-400/20 transition-transform duration-300 hover:-translate-y-2">
              <div className="text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-lg leading-relaxed mb-4 italic">"La serenata más hermosa que he escuchado en mi vida"</p>
              <cite className="text-yellow-400 font-semibold not-italic">- Roberto Jiménez</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;