import React, { useState } from 'react';

/**
 * Video gallery that presents multiple videos (regular + shorts) using YouTube URLs.
 * - Muestra miniaturas (YouTube thumbnail) y reemplaza por iframe al reproducir.
 * - Mantiene un solo reproductor activo a la vez.
 * - Fácil de pasar una lista de videos vía prop `videos`.
 *
 * Uso sencillo:
 * <VideoPlayer videos={[ { url: 'https://youtu.be/ID1', title: '...' }, ... ]} />
 */

const defaultVideos = [
  // Reemplaza las url por las reales de YouTube que tengas
  { url: 'https://youtu.be/TIMXJ4In_6s?si=Grm7-BZu2CNIXh7A', title: 'Presentación de Mariachi Noche Mexicana', type: 'full' },
  { url: 'https://youtu.be/kG253Zum2dM?si=T1_XM3AaAgQuI_rb', title: 'Interpretación de Mariachi Noche Mexicana', type: 'full' },
  { url: 'https://youtu.be/sNcUzauSktc?si=OQJ4fb979QOEj50e', title: 'Una noche de mariachi inolvidable-Mariachi Noche Mexicana', type: 'full' },
  { url: 'https://youtu.be/KHHJiERc6qA?si=vFsg4409JuOBqV3A', title: 'Orgullo mexicano en cada nota-Mariachi Noche Mexicana', type: 'full' },
  { url: 'https://youtu.be/igqQ3PRCG4Q?si=Chrbz1a5MDYQeCNc', title: 'Canciones para el corazón-Mariachi Noche Mexicana en vivo', type: 'full' },
  { url: 'https://youtu.be/lI60Q2KD9Lg?si=TUpDVzK-wydYRWYi', title: 'Contacta a Mariachi Noche Mexicana', type: 'full' },
  { url: 'https://youtu.be/eceQQuPucog?si=m1_zR040vtz70b0q', title: 'Mariachi Noche Mexicana-Un viaje por la música de México', type: 'full' },
  // Shorts (pueden ser URLs del formato /shorts/ID o youtu.be/ID)
  { url: 'https://www.youtube.com/shorts/FA7O2ogAcQE', title: 'Mariachi en Ecatepec', type: 'short' },
  { url: 'https://www.youtube.com/shorts/sM0uJwS8A2Q', title: 'Información para Cotizaciones', type: 'short' },
  { url: 'https://www.youtube.com/shorts/e82ALX4Qd8U', title: 'Celebra con Mariachi Noche Mexicana', type: 'short' },
  { url: 'https://youtube.com/shorts/M8eqeHk0JJM?si=fBtrNc111GGi2OKj', title: 'El sonido de México hecho canción-Mariachi Noche Mexicana', type: 'short' }
];

function extractYouTubeId(url = '') {
  try {
    const u = new URL(url);
    // short url youtu.be/ID
    if (u.hostname.includes('youtu.be')) {
      return u.pathname.slice(1);
    }
    // /shorts/ID
    if (u.pathname.startsWith('/shorts/')) {
      return u.pathname.split('/')[2];
    }
    // normal watch?v=ID
    const v = u.searchParams.get('v');
    if (v) return v;
    // fallback: last segment
    const parts = u.pathname.split('/');
    return parts.pop() || '';
  } catch {
    // fallback slice for plain id
    return url;
  }
}

const VideoCard = ({ item, playing, onPlay, index }) => {
  const id = extractYouTubeId(item.url);
  const thumb = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : item.poster || '';
  const isPlaying = playing === id;

  // responsive iframe embed
  const iframeSrc = id
    ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
    : '';

  return (
    // ahora las tarjetas ocupan 1 columna (dos columnas en la grilla principal). Hice la miniatura más alta.
    <div className={`group relative overflow-hidden rounded-xl bg-black col-span-1 shadow-lg`}>
      <div className="pt-[66.666%] relative"> {/* altura mayor para miniaturas más grandes */}
        {!isPlaying && (
          <>
            <img
              src={thumb}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              draggable={false}
            />
            <button
              type="button"
              onClick={() => onPlay(id)}
              aria-label={`Reproducir ${item.title}`}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 focus:outline-none"
            >
              <span className="flex items-center justify-center w-14 h-14 bg-amber-400 text-black rounded-full shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </span>
            </button>
          </>
        )}

        {isPlaying && (
          <iframe
            title={item.title}
            src={iframeSrc}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          />
        )}
      </div>

      <div className="p-4 bg-[#071023]">
        <h4 className="text-base md:text-lg font-semibold text-white truncate">{item.title}</h4>
        <div className="mt-2 flex items-center justify-between text-sm text-amber-200">
          <span>{item.type === 'short' ? 'Short' : 'Video'}</span>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            onClick={(e) => e.stopPropagation()}
          >
            Abrir en YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ videos = defaultVideos, title = 'Nuestra Presentacion' }) => {
  const [playing, setPlaying] = useState(null); // active youtube id

  const handlePlay = (id) => {
    // toggle: si mismo click pausa (cierra iframe)
    setPlaying((prev) => (prev === id ? null : id));
  };

  // split into main (first 6) and shorts (rest) but allow flexible list
  const mainVideos = videos.filter((v) => v.type !== 'short').slice(0, 7);
  const shorts = videos.filter((v) => v.type === 'short').slice(0, 4);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      <div className="bg-[#0f1720] border border-[#121c33] rounded-xl p-6 shadow-lg">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-extrabold mb-2 text-white">
          {title}
        </h3>
        <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
          Selecciona un video para reproducir. Se abrirá el reproductor de YouTube inline.
        </p>

        {/* Grid for main videos */}
        {/* Dos columnas (más grandes): 1 en móvil, 2 en md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainVideos.map((v, i) => (
            <VideoCard key={i} item={v} playing={playing} onPlay={handlePlay} index={i} />
          ))}
        </div>

        {/* Shorts row */}
        {shorts.length > 0 && (
          <>
            <h4 className="mt-6 mb-3 text-left text-amber-300 font-semibold">Shorts</h4>
            <div className="grid grid-cols-3 gap-4">
              {shorts.map((v, i) => (
                <VideoCard key={`s-${i}`} item={v} playing={playing} onPlay={handlePlay} index={i} />
              ))}
            </div>
          </>
        )}

        <p className="mt-6 text-center text-gray-500 text-sm">
          Si la reproducción automática está bloqueada por el navegador, pulsa el botón de reproducir en la miniatura.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;