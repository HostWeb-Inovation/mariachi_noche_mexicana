import React from 'react';
import arturoImg from '../assets/miembros/Arturo.jpg';
import javierImg from '../assets/miembros/Javier.jpg';
import sebastianImg from '../assets/miembros/Sebastian.jpg';
import albertoImg from '../assets/miembros/AlbertoMendoza.jpeg';
import emmanuelImg from '../assets/miembros/EmmanuelOrtiz.jpeg';
import erickImg from '../assets/miembros/ErickHernández.jpeg';

const About = () => {
  // Array de integrantes del mariachi
  const members = [
    {
      id: 1,
      name: 'Alberto Mendoza',
      role: 'Voz - Guitarra',
      image: albertoImg,
    },
    {
      id: 2,
      name: 'Arturo Colula',
      role: 'Director Musical - Violín',
      image: arturoImg,
    },
    {
      id: 3,
      name: 'Javier Colula',
      role: 'Trompeta',
      image: javierImg,
    },
    {
      id: 4,
      name: 'Sebastián Hernández',
      role: 'Vihuela',
      image: sebastianImg,
    },
    {
      id: 5,
      name: 'Emmanuel Ortiz',
      role: 'Trompeta',
      image: emmanuelImg,
    },
    {
      id: 6,
      name: 'Erick Hernández',
      role: 'Guitarrón',
      image: erickImg,
    },
  ];

  return (
    <section id="sobre-nosotros" className="pt-18 bg-black text-white">
      <div className="py-8 sm:py-12 md:py-16 text-center border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-2 text-amber-400">Sobre Nosotros</h1>
          <p className="text-base sm:text-lg text-gray-300">Conoce la historia y pasión detrás de Mariachi Noche Mexicana</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <section className="py-8 sm:py-10 md:py-12 border-b border-gray-800">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6 sm:mb-8">Nuestra Historia</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify mb-4 sm:mb-6">
              Con el corazón lleno de música y tradición, Mariachi Noche Mexicana se presenta ante ustedes como una agrupación formada por músicos profesionales, comprometidos con llevar la alegría, el romanticismo y la emoción del mariachi a cada celebración.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify mb-6 sm:mb-8">
              Nuestro objetivo es que cada presentación sea un recuerdo inolvidable, ofreciendo un repertorio variado que combina los grandes clásicos del mariachi con temas modernos interpretados con pasión y elegancia.
            </p>

            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mb-3 sm:mb-4 flex items-center">
                🎉 Eventos que Acompañamos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-center text-gray-300">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">💍</span>
                  <span className="text-sm sm:text-base">Bodas</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">👶</span>
                  <span className="text-sm sm:text-base">Bautizos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">👑</span>
                  <span className="text-sm sm:text-base">XV años</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">💐</span>
                  <span className="text-sm sm:text-base">Serenatas románticas</span>
                </div>
                <div className="flex items-center text-gray-300 md:col-span-2">
                  <span className="text-lg sm:text-xl mr-2 sm:mr-3">😢</span>
                  <span className="text-sm sm:text-base">Sepelios - Porque el mariachi también se despide con honor</span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify mb-6 sm:mb-8">
              En Mariachi Noche Mexicana, nos distingue la puntualidad, el profesionalismo y la calidad musical, además del cariño con el que interpretamos cada canción. Queremos ser parte de esos momentos que merecen vivirse con música mexicana, la que llega al alma y alegra el corazón.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-justify mb-6 sm:mb-8">
              Será un placer ser parte de su próxima celebración y llevar el espíritu de México a su evento.
            </p>

            <div className="text-center p-4 sm:p-6 from-amber-900/20 to-yellow-900/20 rounded-lg border border-amber-400/30">
              <h3 className="font-serif text-xl sm:text-2xl text-amber-400 mb-2">Mariachi Noche Mexicana</h3>
              <p className="text-base sm:text-lg text-gray-300">
                🎺✨ <em>"La música que enamora, emociona y celebra contigo"</em>
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 md:py-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-6 sm:mb-8">Nuestros Integrantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            {members.map((member) => (
              <div key={member.id} className="text-center p-6 sm:p-8 bg-gray-900 rounded-2xl border border-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gray-700 mx-auto mb-3 sm:mb-4 border-4 border-amber-400 object-cover"
                />
                <h3 className="font-serif text-lg sm:text-xl text-amber-400 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-gray-400 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;