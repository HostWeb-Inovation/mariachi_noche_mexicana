import './css/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Galería</h1>
          <p>Revive los mejores momentos de nuestras presentaciones</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-grid">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="gallery-item">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <span>📸</span>
                  <p>Imagen {index + 1}</p>
                </div>
              </div>
              <div className="item-overlay">
                <h3>Evento {index + 1}</h3>
                <p>Descripción del evento</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;