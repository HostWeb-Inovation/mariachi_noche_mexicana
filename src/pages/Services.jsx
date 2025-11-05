import React from 'react';

const services = [
  {
    key: 'bodas',
    title: 'Bodas',
    desc: 'La banda sonora perfecta para el día más importante de tu vida.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 21s-6-4.35-8-7a5 5 0 019-5 5 5 0 019 5c-2 2.65-8 7-8 7z" />
      </svg>
    ),
  },
  {
    key: 'bautizos',
    title: 'Bautizos',
    desc: 'Celebra la bienvenida a la familia con música que llega al corazón.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2v7M6 7h12M4 21h16a1 1 0 001-1V9a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    key: 'xv',
    title: 'XV Años',
    desc: 'Añade un toque de tradición y elegancia a esta celebración única.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l2.5 5 5 .5-4 3 1 5-4-2.5L7.5 16 8.5 11 4.5 8l5-.5L12 2z" />
      </svg>
    ),
  },
  {
    key: 'serenatas',
    title: 'Serenatas',
    desc: 'Sorprende a esa persona especial con una serenata inolvidable.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M9 17V5l12-2v12M9 17a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: 'sepelios',
    title: 'Sepelios',
    desc: 'Un homenaje musical respetuoso para despedir a tus seres queridos.',
    icon: (
      <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
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
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-black/40">
                {s.icon}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contáctanos para cotizaciones, repertorios personalizados y disponibilidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;