import { Target, Sparkles, TrendingUp } from 'lucide-react';

export const Mindset = () => {
  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="luxe-kicker mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Beyond Applications</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-section-foreground mb-6">
            But this is <span className="text-primary">not everything</span>.
          </h2>

          <p className="text-xl md:text-2xl text-section-muted-foreground leading-relaxed mb-12">
            We care about more than just university applications. We want you to live the life that you want -
            consistently achieving your <span className="text-primary font-semibold">goals</span>, with the <span className="text-primary font-semibold">mindset</span> you need to accomplish all of this.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="luxe-section-card p-6">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-section-foreground mb-2">Goal Achievement</h3>
              <p className="text-section-muted-foreground text-sm">Build systems that help you consistently hit your targets</p>
            </div>
            <div className="luxe-section-card p-6">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-section-foreground mb-2">Growth Mindset</h3>
              <p className="text-section-muted-foreground text-sm">Develop the mental frameworks for long-term success</p>
            </div>
            <div className="luxe-section-card p-6">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-section-foreground mb-2">Life Design</h3>
              <p className="text-section-muted-foreground text-sm">Create a vision and roadmap for the future you want</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};