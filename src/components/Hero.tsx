import heroBg from '@/assets/hero-bg.jpg';

const heroPoints = [
  {
    label: 'Assess',
    copy: 'Where your profile actually stands today',
  },
  {
    label: 'Plan',
    copy: 'A written, step-by-step roadmap for the next 6–12 months',
  },
  {
    label: 'Execute',
    copy: 'Coaching and accountability while you carry it out',
  },
];

export const Hero = () => {
  return (
    <section id="top" className="force-dark relative flex text-foreground min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Background photo under a dark wash, with gold ambience over top */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover grayscale-[35%] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,hsl(40_53%_64%_/_0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,hsl(40_53%_64%_/_0.08),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 text-center">
        <div className="luxe-kicker mb-8 max-w-full text-[0.6rem] sm:text-xs">
          <span>University &amp; Scholarship Strategy</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block" />
          <span className="hidden sm:inline">Canada</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-[2.1rem] leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4.1rem] font-bold">
          A clear plan for university and scholarship applications,{' '}
          <span className="text-primary">built around you.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-foreground/75">
          Personalized application strategy for ambitious high school students across Canada. We review your profile,
          tell you exactly what to do and in what order, and support you while you do it.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a href="#packages" className="btn-luxe-primary">
            Explore Packages
          </a>
          <a href="/discovery-call" className="btn-luxe-ghost">
            Book a Free Call
          </a>
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground/80">
          Packages from $249 CAD · Grades 9 to 12 · Across Canada
        </p>

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-3">
          {heroPoints.map((point) => (
            <div key={point.label} className="luxe-panel px-5 py-5 text-left">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">{point.label}</p>
              <p className="mt-2 text-sm leading-snug text-foreground/85">{point.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
