import React, { useState, useEffect, useCallback } from 'react';
import { useImageGallery } from '../hooks/useImageGallery';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Usar el hook personalizado para obtener las imágenes
  const { galleryImages, getImagesByCategory, categories } = useImageGallery();
  
  // Filtrar imágenes según la categoría seleccionada
  const displayedImages = selectedCategory === 'all' 
    ? galleryImages 
    : getImagesByCategory(selectedCategory);

  // Manejar carga de imágenes
  const handleImageLoad = (imageId) => {
    setImageLoaded(prev => ({ ...prev, [imageId]: true }));
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Navegar entre imágenes en el modal
  const navigateImage = useCallback((direction) => {
    if (!selectedImage) return;
    
    const currentIndex = displayedImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % displayedImages.length;
    } else {
      newIndex = currentIndex === 0 ? displayedImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(displayedImages[newIndex]);
  }, [selectedImage, displayedImages]);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, navigateImage]);

  return (
    <>
      {/* Filtros de Categoría */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-black shadow-lg'
                : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-amber-400'
            }`}
          >
            Todas ({galleryImages.length})
          </button>
          {categories.map((category) => {
            const count = getImagesByCategory(category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-amber-400 text-black shadow-lg'
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:text-amber-400'
                }`}
              >
                {category === 'romantico' ? 'Romántico' :
                 category === 'quinceanos' ? 'Quinceañeras' :
                 category === 'celebracion' ? 'Celebraciones' :
                 category === 'patriotico' ? 'Patriótico' :
                 category === 'religioso' ? 'Religioso' :
                 category === 'corporativo' ? 'Corporativo' :
                 category === 'navidad' ? 'Navidad' :
                 category === 'concierto' ? 'Conciertos' :
                 category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {displayedImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-400/50 hover:-translate-y-2"
            onClick={() => setSelectedImage(image)}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {/* Skeleton loader */}
            {!imageLoaded[image.id] && (
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className={`aspect-square object-cover w-full transition-all duration-700 ease-out ${
                imageLoaded[image.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              } group-hover:scale-110 group-hover:brightness-110`}
              onLoad={() => handleImageLoad(image.id)}
              onError={(e) => {
                // Fallback a la primera imagen si hay error
                e.target.src = displayedImages[0]?.src || '/images/Mariachi-hero.jpg';
                handleImageLoad(image.id);
              }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <div className="text-white p-4 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-serif text-sm md:text-base font-bold mb-1 text-amber-400">
                  {image.title}
                </h3>
                <p className="text-xs md:text-sm opacity-90 line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>

            {/* Floating view icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
              <div className="bg-amber-400 text-black rounded-full p-3 shadow-2xl animate-pulse">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 text-white hover:text-amber-400 transition-all duration-300 p-3 rounded-full bg-black/70 hover:bg-amber-400/20 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-amber-400/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-amber-400 transition-all duration-300 p-4 rounded-full bg-black/70 hover:bg-amber-400/20 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-amber-400/50"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-amber-400 transition-all duration-300 p-4 rounded-full bg-black/70 hover:bg-amber-400/20 hover:scale-110 backdrop-blur-sm border border-white/10 hover:border-amber-400/50"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Modal content */}
          <div 
            className="max-w-6xl max-h-full flex flex-col lg:flex-row bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="flex-1 relative p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain max-h-[60vh] lg:max-h-[80vh] rounded-xl shadow-2xl"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-xl"></div>
            </div>

            {/* Image info */}
            <div className="lg:w-96 p-8 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm text-white border-l border-white/10">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-2 text-amber-400">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedImage.description}
                  </p>
                </div>
                
                {/* Decorative divider */}
                <div className="flex items-center space-x-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                </div>
                
                {/* Image counter */}
                <div className="flex items-center justify-between text-sm bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="text-gray-400">Imagen</span>
                  <span className="text-amber-400 font-bold text-lg">
                    {displayedImages.findIndex(img => img.id === selectedImage.id) + 1} / {displayedImages.length}
                  </span>
                </div>

                {/* Category and Tags */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Categoría:</span>
                    <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded-full capitalize">
                      {selectedImage.category === 'romantico' ? 'Romántico' :
                       selectedImage.category === 'quinceanos' ? 'Quinceañeras' :
                       selectedImage.category === 'celebracion' ? 'Celebraciones' :
                       selectedImage.category === 'patriotico' ? 'Patriótico' :
                       selectedImage.category === 'religioso' ? 'Religioso' :
                       selectedImage.category === 'corporativo' ? 'Corporativo' :
                       selectedImage.category === 'navidad' ? 'Navidad' :
                       selectedImage.category === 'concierto' ? 'Conciertos' :
                       selectedImage.category}
                    </span>
                  </div>
                  
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {selectedImage.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation hints */}
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Usa las flechas ← → para navegar</p>
                  <p>• Presiona ESC para cerrar</p>
                  <p>• Click fuera para cerrar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;