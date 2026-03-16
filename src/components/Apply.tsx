import { Sparkles } from 'lucide-react';

const applicationRounds = [
  {
    title: 'Early Applications',
    deadline: 'May 31 @ 11:59 PM',
  },
  {
    title: 'Round 1 Applications',
    deadline: 'June 30 @ 11:59 PM',
  },
  {
    title: 'Round 2 Applications',
    deadline: 'July 23 @ 11:59 PM',
  },
];

export const Apply = () => {
  return (
    <section id="apply" className="py-16 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="luxe-kicker mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Limited Spots Available</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-6 animate-slide-up [animation-delay:120ms]">
            Ready to <span className="text-primary">Level Up</span>?
          </h2>

          <p className="text-lg text-section-muted-foreground mb-8 animate-slide-up [animation-delay:240ms]">
            We work with a limited number of students each cycle to ensure <span className="text-primary font-semibold">personalized attention</span>.
            Apply now to secure your spot.
          </p>

          <div className="mb-10 luxe-section-card p-6 md:p-8 text-left animate-slide-up [animation-delay:320ms]">
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="rounded-2xl border border-section-border bg-section-card px-5 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-2">
                  Year 1
                </p>
                <h3 className="text-xl font-bold text-section-foreground mb-2">
                  September to June
                </h3>
                <p className="text-section-muted-foreground text-sm">
                  Students build projects, experiences, and the foundation of their application profile.
                </p>
              </div>

              <div className="rounded-2xl border border-section-border bg-section-card px-5 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-2">
                  Year 2
                </p>
                <h3 className="text-xl font-bold text-section-foreground mb-2">
                  September to February
                </h3>
                <p className="text-section-muted-foreground text-sm">
                  Mentorship continues through application season with support on strategy, essays, and submissions.
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-section-foreground mb-3">
                Application <span className="text-primary">Deadlines</span>
              </h3>
              <p className="text-section-muted-foreground">
                Applications are reviewed on a rolling basis, and seats are limited. Applications may fully close once all spots are filled.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {applicationRounds.map((round) => (
                <div
                  key={round.title}
                  className="rounded-2xl border border-section-border bg-section-card px-5 py-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary mb-3">
                    {round.title}
                  </p>
                  <p className="text-section-foreground font-bold mb-4">
                    Deadline: {round.deadline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/application"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxe-primary gap-2 px-8 py-4 text-sm animate-pulse-glow"
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
