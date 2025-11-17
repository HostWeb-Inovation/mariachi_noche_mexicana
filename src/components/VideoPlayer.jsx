import React, { useState, useEffect } from 'react';

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
  const isShort = item.type === 'short';
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Detectar móvil por touch y tamaño
      const mobile = window.innerWidth < 768 || ('ontouchstart' in window);
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: autoplay embed
  const desktopParams = 'autoplay=1&rel=0&playsinline=1&controls=1&fs=1';
  const iframeSrc = id ? `https://www.youtube.com/embed/${id}?${desktopParams}` : '';

  const ratioClass = isShort ? 'pt-[177.78%]' : 'pt-[56.25%]';

  const handlePlayClick = (e) => {
    e.preventDefault();
    
    if (isMobile) {
      // En móvil: abrir directamente en YouTube (app o navegador)
      const youtubeUrl = isShort 
        ? `https://youtube.com/shorts/${id}` 
        : `https://www.youtube.com/watch?v=${id}`;
      window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
    } else {
      // En desktop: reproducir inline
      onPlay(id);
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl bg-black col-span-1 shadow-lg`}>
      <div className={`${ratioClass} relative`}>
        {/* Thumbnail siempre visible en móvil, en desktop solo si no está playing */}
        {(isMobile || !isPlaying) && (
          <>
            <img
              src={thumb}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              draggable={false}
            />
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={`Reproducir ${item.title}`}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 active:bg-black/50 focus:outline-none transition-colors z-10"
            >
              <span className="flex items-center justify-center w-20 h-20 md:w-16 md:h-16 bg-red-600 text-white rounded-full shadow-2xl transition-transform active:scale-90 hover:bg-red-700">
                <svg className="w-10 h-10 md:w-8 md:h-8 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {isMobile && (
                <span className="absolute bottom-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                  Ver en YouTube
                </span>
              )}
            </button>
          </>
        )}

        {/* Iframe SOLO en desktop cuando está playing */}
        {!isMobile && isPlaying && (
          <iframe
            title={item.title}
            src={iframeSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        )}
      </div>

      <div className="p-4 bg-[#071023]">
        <h4 className="text-base md:text-lg font-semibold text-white truncate">{item.title}</h4>
        <div className="mt-2 flex items-center justify-between text-sm text-amber-200">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            {isShort ? 'Short' : 'Video'}
          </span>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-300 active:text-amber-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

const VideoPlayer = ({ videos = defaultVideos, title = 'Nuestra Presentacion' }) => {
  const [playing, setPlaying] = useState(null);

  const handlePlay = (id) => {
    setPlaying((prev) => (prev === id ? null : id));
  };

  const mainVideos = videos.filter((v) => v.type !== 'short').slice(0, 7);
  const shorts = videos.filter((v) => v.type === 'short').slice(0, 4);

  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      <div className="bg-[#0f1720] border border-[#121c33] rounded-xl p-6 shadow-lg">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-extrabold mb-2 text-white">
          {title}
        </h3>
        <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
          {window.innerWidth < 768 
            ? 'Toca un video para abrirlo en YouTube'
            : 'Selecciona un video para reproducir inline'
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainVideos.map((v, i) => (
            <VideoCard key={i} item={v} playing={playing} onPlay={handlePlay} index={i} />
          ))}
        </div>

        {shorts.length > 0 && (
          <>
            <h4 className="mt-6 mb-3 text-left text-amber-300 font-semibold">Shorts</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {shorts.map((v, i) => (
                <VideoCard key={`s-${i}`} item={v} playing={playing} onPlay={handlePlay} index={i} />
              ))}
            </div>
          </>
        )}

        <p className="mt-6 text-center text-gray-500 text-sm">
          {window.innerWidth < 768 
            ? 'Los videos se abrirán en la app de YouTube para mejor experiencia'
            : 'Los videos se reproducen directamente aquí'
          }
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;