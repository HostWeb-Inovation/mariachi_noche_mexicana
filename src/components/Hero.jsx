import { Play, Calendar, MapPin, Star, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-18">
      {/* Background with gradient animation */}
      <div className="absolute inset-0 gradient-shift"></div>
      
      {/* Overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-black/20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'><circle cx='10' cy='10' r='1' fill='rgba(255,215,0,0.1)'/></pattern></defs><rect width='100' height='100' fill='url(%23pattern)'/></svg>")`
           }}>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Mariachi</span>
            <span className="block text-yellow-400 drop-shadow-lg">Noche Mexicana</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold mb-4 text-yellow-400">
            Tradición, pasión y música auténtica para tus momentos especiales
          </p>
          
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Grupo mariachi profesional con más de 15 años de experiencia llevando 
            la magia de México a bodas, serenatas, quinceañeras y eventos corporativos.
          </p>
          
          {/* Features */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 font-medium">
              <Star className="text-yellow-400 w-5 h-5" />
              <span>15+ años de experiencia</span>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <MapPin className="text-yellow-400 w-5 h-5" />
              <span>Servicio en toda la ciudad</span>
            </div>
            <div className="flex items-center gap-3 font-medium">
              <Calendar className="text-yellow-400 w-5 h-5" />
              <span>Disponible 7 días de la semana</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              Solicitar Cotización
            </button>
            <button className="btn btn-secondary">
              <Play className="w-4 h-4" />
              Ver Video
            </button>
          </div>
        </div>
        
        {/* Image Placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-96 h-120 bg-white/10 border-2 border-dashed border-yellow-400/50 rounded-3xl flex items-center justify-center flex-col gap-4 backdrop-blur-md">
            <div className="text-center text-white/70">
              <Music className="w-15 h-15 text-yellow-400 mx-auto mb-4" />
              <p className="text-lg">Imagen del Mariachi</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 border-2 border-yellow-400 border-l-0 border-t-0 rotate-45 animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;