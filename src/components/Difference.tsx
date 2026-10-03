const points = [
  {
    not: 'Not tutoring',
    copy: 'We aren’t here to help you get through your next math test.',
  },
  {
    not: 'Not generic admissions advice',
    copy: 'Your strategy is based on your actual profile, goals, and timeline.',
  },
  {
    not: 'Not essay writing',
    copy: 'We help you communicate your own experiences effectively rather than writing your application for you.',
  },
  {
    not: 'Not a one-size-fits-all checklist',
    copy: 'Your next steps depend on where you are starting from.',
  },
];

export const Difference = () => {
  return (
    <section className="relative border-t border-primary/10 bg-section py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">What Makes Apex Different</span>
          <h2 className="section-heading mt-5">
            More than application advice. A <span className="text-primary">strategy built around you.</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-section-border bg-section-border sm:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={point.not}
              className="bg-section-card/80 p-7 md:p-8"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-primary/60" />
                <h3 className="text-lg font-bold tracking-[-0.01em] text-foreground">{point.not}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
