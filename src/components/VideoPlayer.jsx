import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer = ({
  src = '/videos/Presentacion.mp4',
  poster = '/images/video-poster.jpg',
  title = 'Video de presentación',
  muted = false,
  loop = false,
  description = 'Mira una breve presentación de Mariachi Noche Mexicana.'
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [showThumb, setShowThumb] = useState(true);

  // Crear thumbnail a partir de los primeros segundos del video (cliente)
  useEffect(() => {
    let cancelled = false;
    if (!src) return;
    const captureThumbnail = async () => {
      try {
        const tmp = document.createElement('video');
        tmp.preload = 'metadata';
        tmp.crossOrigin = 'anonymous';
        tmp.src = src;

        // Esperar metadata para conocer duración/dimensiones
        await new Promise((res, rej) => {
          const onLoaded = () => res();
          tmp.addEventListener('loadedmetadata', onLoaded, { once: true });
          // fallback timeout
          setTimeout(res, 2000);
        });

        // Elegimos un segundo cercano al inicio (0.5 - 1s) seguro para la mayoría de videos
        const seekTime = Math.min(1, (tmp.duration && tmp.duration > 1) ? 0.8 : 0);
        tmp.currentTime = seekTime;

        // Esperar seek
        await new Promise((res) => tmp.addEventListener('seeked', res, { once: true }));

        const w = tmp.videoWidth || 1280;
        const h = tmp.videoHeight || Math.round(w * 9 / 16);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(tmp, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (!cancelled) {
          setThumbnail(dataUrl);
          setShowThumb(true);
        }

        // cleanup
        tmp.pause();
        tmp.src = '';
      } catch (e) {
        // Si falla, fallback al poster (no hacemos nada)
      }
    };

    captureThumbnail();
    return () => {
      cancelled = true;
    };
  }, [src]);

  const handlePlay = async () => {
    if (!videoRef.current) return;
    try {
      // iniciar desde 0, audio activado y controles visibles
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false; // audio activado por defecto
      videoRef.current.controls = true;
      await videoRef.current.play();
      setIsPlaying(true);
      setShowThumb(false);
      setError(null);
    } catch (e) {
      setError('No se pudo reproducir el video automáticamente. Usa los controles.');
      if (videoRef.current) videoRef.current.controls = true;
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    // volver a mostrar thumbnail/overlay y resetear video
    setIsPlaying(false);
    setShowThumb(true);
    if (videoRef.current) {
      videoRef.current.controls = false;
      try {
        videoRef.current.currentTime = 0;
      } catch {}
    }
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto px-6">
      <div className="bg-[#0f1720] border border-[#121c33] rounded-xl p-6 shadow-lg">
        <h3 className="text-center font-serif text-2xl md:text-3xl font-extrabold mb-2 text-white">
          Nuestra Presentacion
        </h3>
        <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
          {/* Video real (invisible por encima del thumbnail hasta que se reproduzca) */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label={title}
            onEnded={handleEnded}
            preload="metadata"
            loop={loop}
            controls={false}
          />

          {/* Thumbnail estático generado o poster fallback */}
          {showThumb && (
            <img
              src={thumbnail || poster}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          )}

          {/* Overlay play button (visible cuando thumbnail mostrado) */}
          {showThumb && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label={`Reproducir ${title}`}
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span className="flex items-center justify-center w-14 h-14 bg-amber-400 text-black rounded-full shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 3v18l15-9L5 3z" />
                </svg>
              </span>
            </button>
          )}
        </div>

        {error && (
          <p className="mt-3 text-sm text-amber-300 text-center">{error}</p>
        )}

        <p className="mt-4 text-center text-gray-500 text-sm">
          Usa los controles del reproductor (pausa, volumen y barra de progreso) una vez que el video esté en reproducción.
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;