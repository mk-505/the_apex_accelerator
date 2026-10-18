const scenarios = [
  {
    stage: 'Grade 9–10',
    quote: 'I’m early in high school and want to get this right.',
    detail:
      'Build the right habits, find a direction and start small projects now, instead of scrambling in Grade 12.',
    start: 'Start with Apex Strategy, or Momentum for ongoing coaching',
  },
  {
    stage: 'Grade 11',
    quote: 'This is my big profile-building year.',
    detail:
      'You need a clear theme, two or three big moves like research, an internship or a passion project, and a summer that counts.',
    start: 'Best fit: Apex Momentum',
  },
  {
    stage: 'Grade 12',
    quote: 'I’m in application season.',
    detail:
      'You need a final school list, strong essays, a plan for scholarship deadlines and practice for interviews.',
    start: 'Best fit: Apex Advantage',
  },
  {
    stage: 'Any grade',
    quote: 'I just want to know exactly what to do next.',
    detail:
      'Get a written plan first, then decide how much support you want. Upgrade within 30 days and your $249 is credited in full.',
    start: 'Start with Apex Strategy',
  },
];

export const WhoFor = () => {
  return (
    <section className="relative border-t border-primary/10 bg-section py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">Who Is This For?</span>
          <h2 className="section-heading mt-5">
            Wherever you are in high school, <span className="text-primary">start from where you are.</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Grades 9 to 12 all work. What changes is the plan, and how much of it is still ahead of you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.quote}
              className="luxe-section-card group flex flex-col p-7 hover:border-primary/35 hover:-translate-y-1"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">{scenario.stage}</p>
              <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.01em] text-foreground">
                &ldquo;{scenario.quote}&rdquo;
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{scenario.detail}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-section-border pt-5">
                <span className="h-1 w-1 rounded-full bg-primary" />
                <a
                  href="#packages"
                  className="text-sm font-semibold text-foreground/85 transition-colors group-hover:text-primary"
                >
                  {scenario.start}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
