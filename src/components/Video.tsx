import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const videoSrc = 'https://xer99jdtgcnsca6p.public.blob.vercel-storage.com/apex_intro.mp4';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video || hasStarted) {
      return;
    }

    try {
      video.currentTime = 2;
    } catch {
      // Some browsers block seeking until enough data is buffered.
    }
  };

  const handlePlay = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    setHasStarted(true);
    await video.play();
  };

  return (
    <section className="py-16 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-section-foreground mb-4">
              See What We're <span className="text-primary">About</span>
            </h2>
          </div>

          <div className="relative aspect-video luxe-section-card overflow-hidden animate-slide-up [animation-delay:120ms]">
            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-primary/20 via-transparent to-black/20 transition-opacity hover:bg-primary/10"
                aria-label="Play introduction video"
              >
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_44px_hsl(var(--primary)/0.45)] transition-transform duration-300 hover:scale-105">
                  <Play className="ml-1 h-10 w-10 fill-current" />
                </span>
              </button>
            )}
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              controls={hasStarted}
              playsInline
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setHasStarted(true)}
            >
              <source src={`${videoSrc}#t=2`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
