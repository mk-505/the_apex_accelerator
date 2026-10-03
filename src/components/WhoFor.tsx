const scenarios = [
  {
    stage: 'Grade 9–10',
    quote: 'I’m early in high school.',
    detail: 'I want to make smart decisions now instead of scrambling in Grade 12.',
    start: 'Start with Apex Strategy',
  },
  {
    stage: 'Grade 10–11',
    quote: 'I have a strong profile, but I don’t know how it all fits together.',
    detail: 'I’ve done a lot, but I don’t know how to turn it into a compelling application.',
    start: 'Start with Apex Toolkit',
  },
  {
    stage: 'Grade 11–12',
    quote: 'I’m entering application season.',
    detail:
      'I need help figuring out what to prioritize, how to approach scholarships, and how to make my applications stronger.',
    start: 'Start with Apex Toolkit',
  },
  {
    stage: 'Any grade',
    quote: 'I know what I want, but I need someone to review my work.',
    detail: 'I want another perspective on my essays, applications, and overall positioning.',
    start: 'Start with Apex Advantage',
  },
];

export const WhoFor = () => {
  return (
    <section className="relative border-t border-primary/10 bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">Who Is This For?</span>
          <h2 className="section-heading mt-5">
            Wherever you are in high school, <span className="text-primary">start from where you are.</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            There&apos;s no single grade you have to be in. What changes is the plan, and how much of it is still ahead
            of you.
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
