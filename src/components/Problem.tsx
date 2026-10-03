const questions = [
  'Which of my experiences actually matter?',
  'How do the things I do fit together?',
  'Where are the gaps in my profile?',
  'What do my target programs and scholarships value?',
  'How do I position myself honestly without underselling it?',
  'What should I prioritize next?',
];

export const Problem = () => {
  return (
    <section className="relative border-t border-primary/10 bg-section py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">The Real Problem</span>
          <h2 className="section-heading mt-5">
            You&apos;re doing a lot. But does it all tell the <span className="text-primary">right story?</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Some students come to us with a packed profile. Others are just getting started and want to build in the
            right direction. Either way, the hard part isn&apos;t the list of activities. It&apos;s knowing what any of
            it is worth to the schools and scholarships you&apos;re aiming at.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((question, index) => (
            <div
              key={question}
              className="luxe-section-card p-6 hover:border-primary/35"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 70}ms` }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-sm font-bold text-primary">
                ?
              </span>
              <p className="mt-4 text-base leading-snug text-foreground/90">{question}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base md:text-lg text-foreground/80" data-reveal="up">
          Apex exists to answer those questions and turn them into{' '}
          <span className="font-semibold text-primary">one clear strategy</span>, plus a short list of things worth
          doing next.
        </p>
      </div>
    </section>
  );
};
