import { ClipboardList, Compass, Map, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assess',
    icon: ClipboardList,
    description:
      'Before your session you complete a short intake questionnaire: marks, activities, goals, your typical week, and what you’re worried about. Parents fill in their own section. We review all of it before we meet.',
    tags: ['Academics', 'Extracurriculars', 'Goals', 'Habits'],
  },
  {
    number: '02',
    title: 'Position',
    icon: Compass,
    description:
      'In a 2-hour 1-on-1 session we look at the full picture: your marks against target averages, your extracurriculars, your habits and your goals. Together we set your reach / match / safe list, pick the scholarships worth aiming for, choose the big moves that fit you, like research, an internship or a passion project, and define what your application should make readers remember.',
    tags: ['School list', 'Scholarships', 'Extracurriculars', 'Big moves'],
  },
  {
    number: '03',
    title: 'Plan',
    icon: Map,
    description:
      'Within 3 business days you receive your written Apex Roadmap: the habits to fix, the two or three big moves to make, your weekly schedule, a scholarship shortlist and a dated checklist for the next 30 days.',
    tags: ['Roadmap', 'Big moves', 'Scholarships', 'Next 30 days'],
  },
  {
    number: '04',
    title: 'Execute',
    icon: Rocket,
    description:
      'With Momentum or Advantage, we coach you every two weeks and help you actually do the work: building out your passion project, landing research or an internship, strengthening your extracurriculars and sticking to your habits. When application season comes, we help with your school list, essays, scholarship applications and interview prep.',
    tags: ['Passion projects', 'Internships', 'Accountability', 'Applications'],
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
            Four steps, in order. Every package covers the first three. Your package decides how much support you get
            with the fourth.
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
