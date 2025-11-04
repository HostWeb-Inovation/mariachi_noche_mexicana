import './css/Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Música tradicional mexicana para cada ocasión especial</p>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          <div className="service-detail">
            <div className="service-icon">💒</div>
            <h2>Bodas</h2>
            <p>Haz de tu boda un momento mágico con nuestro repertorio romántico</p>
            <ul>
              <li>Ceremonia religiosa</li>
              <li>Entrada de novios</li>
              <li>Vals de novios</li>
              <li>Música durante la recepción</li>
            </ul>
            <div className="price">Desde $2,500 MXN</div>
          </div>

          <div className="service-detail">
            <div className="service-icon">👑</div>
            <h2>Quinceañeras</h2>
            <p>Celebra tus 15 años con la tradición y elegancia del mariachi</p>
            <ul>
              <li>Las Mañanitas</li>
              <li>Vals de honor</li>
              <li>Música durante la fiesta</li>
              <li>Canciones especiales</li>
            </ul>
            <div className="price">Desde $2,000 MXN</div>
          </div>

          <div className="service-detail">
            <div className="service-icon">🎵</div>
            <h2>Serenatas</h2>
            <p>Sorprende a esa persona especial con una serenata inolvidable</p>
            <ul>
              <li>Repertorio personalizado</li>
              <li>Canciones románticas</li>
              <li>Duración flexible</li>
              <li>Disponible 24/7</li>
            </ul>
            <div className="price">Desde $1,500 MXN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;