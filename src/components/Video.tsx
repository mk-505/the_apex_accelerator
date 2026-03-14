import { useState } from 'react';
import { Play } from 'lucide-react';

const youtubeVideoId = 'cXcF-2xcSL0';
const youtubeEmbedSrc = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
const youtubeThumbnailSrc = `https://i.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

export const Video = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    setHasStarted(true);
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
            {hasStarted ? (
              <iframe
                className="h-full w-full"
                src={youtubeEmbedSrc}
                title="Apex Accelerator introduction video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={youtubeThumbnailSrc}
                  alt="Apex Accelerator introduction video thumbnail"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/25" />
              </>
            )}

            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 z-10 flex items-center justify-center transition-opacity hover:bg-primary/10"
                aria-label="Play introduction video"
              >
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_44px_hsl(var(--primary)/0.45)] transition-transform duration-300 hover:scale-105">
                  <Play className="ml-1 h-10 w-10 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
