import { Sparkles } from 'lucide-react';

export const Apply = () => {
  return (
    <section id="apply" className="py-24 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="luxe-kicker mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Limited Spots Available</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-section-foreground mb-6">
            Ready to <span className="text-primary">Level Up</span>?
          </h2>

          <p className="text-xl text-section-muted-foreground mb-8">
            We work with a limited number of students each cycle to ensure <span className="text-primary font-semibold">personalized attention</span>.
            Apply now to secure your spot.
          </p>

          <a
            href="#contact"
            className="btn-luxe-primary gap-2 px-8 py-4 text-sm"
          >
            Apply Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
