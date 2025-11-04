const Gallery = () => {
  return (
    <div className="pt-18 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-5xl mb-4 text-yellow-400">Galería</h1>
          <p className="text-xl opacity-90">Revive los mejores momentos de nuestras presentaciones</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/20"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="text-center">
                  <span className="text-4xl mb-2 block">📸</span>
                  <p className="text-sm font-medium">Imagen {index + 1}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
          <h3 className="font-serif text-2xl text-amber-800 mb-4">¿Te gustó lo que viste?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Estos son solo algunos de los momentos especiales que hemos creado. 
            Permítenos ser parte de tu historia también.
          </p>
          <button className="btn btn-primary text-lg px-12 py-4">
            Contratar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;