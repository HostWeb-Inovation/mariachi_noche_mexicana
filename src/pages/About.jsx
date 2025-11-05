import React from 'react';

const About = () => {
  return (
    <section id="sobre-nosotros" className="pt-18 bg-black text-white">
      <div className="py-16 text-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl sm:text-5xl mb-2 text-amber-400">Sobre Nosotros</h1>
          <p className="text-lg text-gray-300">Conoce la historia y pasión detrás de Mariachi Noche Mexicana</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <section className="py-12 border-b border-gray-800">
          <h2 className="font-serif text-3xl text-white mb-8">Nuestra Historia</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-300 text-justify mb-6">
              Con el corazón lleno de música y tradición, Mariachi Noche Mexicana se presenta ante ustedes como una agrupación formada por músicos profesionales, comprometidos con llevar la alegría, el romanticismo y la emoción del mariachi a cada celebración.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300 text-justify mb-8">
              Nuestro objetivo es que cada presentación sea un recuerdo inolvidable, ofreciendo un repertorio variado que combina los grandes clásicos del mariachi con temas modernos interpretados con pasión y elegancia.
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
              <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center">
                🎉 Eventos que Acompañamos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-gray-300">
                  <span className="text-xl mr-3">💍</span>
                  <span>Bodas</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-xl mr-3">👶</span>
                  <span>Bautizos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-xl mr-3">👑</span>
                  <span>XV años</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-xl mr-3">💐</span>
                  <span>Serenatas románticas</span>
                </div>
                <div className="flex items-center text-gray-300 md:col-span-2">
                  <span className="text-xl mr-3">😢</span>
                  <span>Sepelios - Porque el mariachi también se despide con honor</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-300 text-justify mb-8">
              En Mariachi Noche Mexicana, nos distingue la puntualidad, el profesionalismo y la calidad musical, además del cariño con el que interpretamos cada canción. Queremos ser parte de esos momentos que merecen vivirse con música mexicana, la que llega al alma y alegra el corazón.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 text-justify mb-8">
              Será un placer ser parte de su próxima celebración y llevar el espíritu de México a su evento.
            </p>

            <div className="text-center p-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 rounded-lg border border-amber-400/30">
              <h3 className="font-serif text-2xl text-amber-400 mb-2">Mariachi Noche Mexicana</h3>
              <p className="text-lg text-gray-300">
                🎺✨ <em>"La música que enamora, emociona y celebra contigo"</em>
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="font-serif text-3xl text-white mb-8">Nuestros Integrantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">José María González</h3>
              <p className="text-gray-400 font-medium">Director Musical - Violín</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-400 font-medium">Guitarrón</p>
            </div>

            <div className="text-center p-8 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="w-30 h-30 rounded-full bg-gray-700 mx-auto mb-4 border-4 border-amber-400" />
              <h3 className="font-serif text-amber-400 mb-2">Miguel Hernández</h3>
              <p className="text-gray-400 font-medium">Trompeta</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;