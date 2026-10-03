import { ClipboardList, Compass, Map, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assess',
    icon: ClipboardList,
    description:
      'We look at where you are now: academics, extracurriculars, leadership, projects, experience, interests, goals, and target programs.',
    tags: ['Academics', 'Extracurriculars', 'Goals', 'Target programs'],
  },
  {
    number: '02',
    title: 'Position',
    icon: Compass,
    description:
      'We identify the strongest parts of your profile and determine how your experiences can come together into a coherent story.',
    tags: ['Strengths', 'Gaps', 'Narrative', 'Fit'],
  },
  {
    number: '03',
    title: 'Plan',
    icon: Map,
    description:
      'You receive a personalized roadmap outlining what to prioritize next: opportunities, projects, applications, scholarships, and other areas that can strengthen your profile.',
    tags: ['Priorities', 'Timeline', 'Scholarships', 'Next 6–12 months'],
  },
  {
    number: '04',
    title: 'Execute',
    icon: Rocket,
    description:
      'Depending on your package, Apex provides resources, application feedback, edits, and access to our broader network to help you actually execute the plan.',
    tags: ['Resources', 'Feedback', 'Edits', 'Network'],
  },
];

export const Process = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-primary/10 bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(40_53%_64%_/_0.08),transparent_45%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-heading mt-5">The Apex Process</h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Four steps, in order. Everything we do sits somewhere on this line, and your package decides how far down
            it we go with you.
          </p>
        </div>

        {/* Step rail */}
        <div className="mx-auto mt-10 hidden max-w-4xl items-center gap-3 md:flex" data-reveal="up">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-center gap-3">
              <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {step.title}
              </span>
              {index < steps.length - 1 && <span className="hairline flex-1" />}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="luxe-section-card group relative overflow-hidden p-7 md:p-8 hover:border-primary/40 hover:-translate-y-1"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              <span className="step-numeral pointer-events-none absolute right-6 top-5 text-6xl leading-none opacity-50 transition-opacity duration-500 md:text-7xl group-hover:opacity-80">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-foreground">{step.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{step.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-section-border bg-section-muted px-3 py-1 text-[0.72rem] text-foreground/75"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
