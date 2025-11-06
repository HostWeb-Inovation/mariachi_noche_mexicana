import React from 'react';
import { FaChurch, FaBirthdayCake } from 'react-icons/fa';
import { GiGuitarHead, GiBigDiamondRing } from 'react-icons/gi';
import VideoPlayer from '../components/VideoPlayer';


const services = [
  {
    key: 'bodas',
    title: 'Bodas',
    desc: 'La banda sonora perfecta para el día más importante de tu vida.',
    // icon ahora sin w-6 h-6 para heredar tamaño desde el wrapper
    icon: <GiBigDiamondRing className="text-amber-400" aria-hidden />,
  },
  {
    key: 'bautizos',
    title: 'Bautizos',
    desc: 'Celebra la bienvenida a la familia con música que llega al corazón.',
    icon: <FaChurch className="text-amber-400" aria-hidden />,
  },
  {
    key: 'xv',
    title: 'XV Años',
    desc: 'Añade un toque de tradición y elegancia a esta celebración única.',
    icon: <FaBirthdayCake className="text-amber-400" aria-hidden />,
  },
  {
    key: 'serenatas',
    title: 'Serenatas',
    desc: 'Sorprende a esa persona especial con una serenata inolvidable.',
    icon: <GiGuitarHead className="text-amber-400" aria-hidden />,
  },
  {
    key: 'sepelios',
    title: 'Sepelios',
    desc: 'Un homenaje musical respetuoso para despedir a tus seres queridos.',
    icon: (
      <svg className="text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2v20" />
        <path d="M5 11h14" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-serif text-3xl sm:text-4xl font-extrabold mb-8">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.key}
              className="group bg-[#14181b] border border-[#121c33] rounded-2xl p-4 md:p-6 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-lg hover:border-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-400"
            >
              <div
                className="w-full max-w-[68px] md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 bg-black/30 transition-all duration-300 group-hover:bg-amber-400/10 group-hover:backdrop-blur-sm group-hover:scale-110 text-2xl md:text-lg"
              >
                {s.icon}
              </div>

              <h3 className="text-white font-semibold text-base md:text-lg mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm md:text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contáctanos para cotizaciones, repertorios personalizados y disponibilidad.
          </p>
        </div>

        {/* Video: reproducir al tocar, responsive */}
        <VideoPlayer src="/videos/Presentacion.mp4" poster="/images/video-poster.jpg" title="Presentación - Mariachi Noche Mexicana" />
      </div>
    </section>
  );
};

export default Services;