import { useMemo } from 'react';
import imageMetadata from '../data/imageMetadata.json';

/**
 * Hook personalizado para manejar la galería de imágenes
 * Combina imports dinámicos con metadata del JSON
 */
export const useImageGallery = () => {
  // Import dinámico de todas las imágenes usando Vite's glob import
  const imageModules = import.meta.glob('../components/img/*.jpg', { eager: true });

  // Array de imágenes generado dinámicamente con metadata
  const galleryImages = useMemo(() => {
    return Object.entries(imageModules)
      .map(([path, module]) => {
        const fileName = path.split('/').pop().split('.')[0];
        const imageNumber = parseInt(fileName, 10);
        const metadata = imageMetadata[imageNumber.toString()];
        
        return {
          id: imageNumber,
          src: module.default,
          fileName,
          title: metadata?.title || `Presentación ${imageNumber}`,
          description: metadata?.description || `Momento especial de nuestras presentaciones de mariachi`,
          category: metadata?.category || 'general',
          tags: metadata?.tags || [],
          alt: `Mariachi Noche Mexicana - ${metadata?.title || `Imagen ${imageNumber}`}`
        };
      })
      .sort((a, b) => a.id - b.id); // Ordenar por número
  }, []);

  // Funciones de utilidad para filtrar imágenes
  const getImagesByCategory = (category) => {
    return galleryImages.filter(image => image.category === category);
  };

  const getImagesByTag = (tag) => {
    return galleryImages.filter(image => 
      image.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    );
  };

  const getRandomImages = (count = 5) => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const searchImages = (query) => {
    const lowerQuery = query.toLowerCase();
    return galleryImages.filter(image => 
      image.title.toLowerCase().includes(lowerQuery) ||
      image.description.toLowerCase().includes(lowerQuery) ||
      image.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  };

  return {
    galleryImages,
    getImagesByCategory,
    getImagesByTag,
    getRandomImages,
    searchImages,
    totalImages: galleryImages.length,
    categories: [...new Set(galleryImages.map(img => img.category))],
    allTags: [...new Set(galleryImages.flatMap(img => img.tags))]
  };
};