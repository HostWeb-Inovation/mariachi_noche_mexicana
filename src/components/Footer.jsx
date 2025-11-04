import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50"
           style={{
             backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='pattern' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'><circle cx='15' cy='15' r='2' fill='rgba(255,215,0,0.05)'/></pattern></defs><rect width='100' height='100' fill='url(%23pattern)'/></svg>")`
           }}>
      </div>
      
      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <Music className="text-yellow-400 w-7 h-7" />
                <span className="font-serif text-xl font-bold text-yellow-400">Mariachi Noche Mexicana</span>
              </div>
              <p className="text-gray-100 leading-relaxed mb-6 opacity-90">
                Tradición musical mexicana desde 2008. Llevamos la auténtica música de mariachi 
                a tus eventos más importantes con profesionalismo y pasión.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-yellow-400/10 border-2 border-yellow-400 rounded-full text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30" 
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-yellow-400/10 border-2 border-yellow-400 rounded-full text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30" 
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-10 h-10 bg-yellow-400/10 border-2 border-yellow-400 rounded-full text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-amber-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30" 
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-400/30">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li><a href="#bodas" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Bodas</a></li>
              <li><a href="#quinceañeras" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Quinceañeras</a></li>
              <li><a href="#serenatas" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Serenatas</a></li>
              <li><a href="#eventos-corporativos" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Eventos Corporativos</a></li>
              <li><a href="#fiestas-familiares" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Fiestas Familiares</a></li>
              <li><a href="#aniversarios" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Aniversarios</a></li>
            </ul>
          </div>

          {/* Repertoire Section */}
          <div>
            <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-400/30">
              Repertorio
            </h3>
            <ul className="space-y-2">
              <li><a href="#tradicionales" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Canciones Tradicionales</a></li>
              <li><a href="#romanticas" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Música Romántica</a></li>
              <li><a href="#rancheras" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Rancheras</a></li>
              <li><a href="#boleros" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Boleros</a></li>
              <li><a href="#huapangos" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Huapangos</a></li>
              <li><a href="#personalizadas" className="text-gray-100 transition-all duration-300 hover:text-yellow-400 hover:pl-2 block py-1">Canciones Personalizadas</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-serif text-xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-400/30">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-yellow-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-400 font-medium mb-1">Teléfono</p>
                  <a href="tel:+1234567890" className="text-gray-100 transition-colors duration-300 hover:text-yellow-400">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-yellow-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-400 font-medium mb-1">Email</p>
                  <a href="mailto:info@mariachi.com" className="text-gray-100 transition-colors duration-300 hover:text-yellow-400">info@mariachi.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-yellow-400 font-medium mb-1">Ubicación</p>
                  <p className="text-gray-100">Ciudad de México</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-yellow-400/20">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-100 opacity-80 text-center md:text-left">
            © 2024 Mariachi Noche Mexicana. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-gray-100 opacity-80 text-sm">
            <span>Hecho con</span>
            <Heart className="text-red-400 w-4 h-4 animate-pulse" />
            <span>para la música mexicana</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;