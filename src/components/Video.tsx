import { Play } from 'lucide-react';

export const Video = () => {
  return (
    <section className="py-24 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-section-foreground mb-4">
              See What We're <span className="text-primary">About</span>
            </h2>
          </div>

          {/* Video Embed Placeholder */}
          <div className="relative aspect-video luxe-section-card overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-transparent">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors animate-pulse-glow">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-section-muted-foreground text-sm">Video coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
