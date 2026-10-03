const ladder = [
  { price: '$199', name: 'Strategy', line: '“Tell me what I should do.”' },
  { price: '$339', name: 'Toolkit', line: '“Give me the strategy and tools to do it.”' },
  { price: '$549', name: 'Advantage', line: '“Help me actually do it.”' },
];

export const CTA = () => {
  return (
    <section
      id="start"
      className="relative overflow-hidden border-t border-primary/10 bg-background py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(40_53%_64%_/_0.14),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <h2 className="section-heading">
            Not sure what your <span className="text-primary">next move</span> should be?
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-xl">
            Start with a conversation. We&apos;ll learn where you are, what you&apos;re aiming for, and whether Apex can
            actually help.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href="/discovery-call" className="btn-luxe-primary">
              Book a Free Call
            </a>
            <a href="#packages" className="btn-luxe-ghost">
              Explore Packages
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            15 minutes · no preparation required · no obligation to buy anything
          </p>
        </div>

        {/* The three-step ladder, restated plainly */}
        <div className="mx-auto mt-16 max-w-4xl" data-reveal="up">
          <div className="grid gap-4 sm:grid-cols-3">
            {ladder.map((tier, index) => (
              <a
                key={tier.name}
                href="#packages"
                className="luxe-panel group flex flex-col px-6 py-6 text-left transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
                data-reveal="up"
                style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
              >
                <span className="text-2xl font-bold tracking-[-0.02em] text-primary">{tier.price}</span>
                <span className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-foreground/70">
                  {tier.name}
                </span>
                <span className="mt-3 text-sm leading-snug text-muted-foreground">{tier.line}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
