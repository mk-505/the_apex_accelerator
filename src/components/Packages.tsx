import { Check, Minus } from 'lucide-react';

type Package = {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  summary: string;
  inheritsFrom?: string;
  features: string[];
  promise: string;
  cta: string;
  featured?: boolean;
};

const packages: Package[] = [
  {
    slug: 'strategy',
    name: 'Apex Strategy',
    price: '199',
    tagline: '“Tell me what I should do.”',
    summary: 'A personalized strategy session built around your actual profile, not a generic consultation.',
    features: [
      '2-hour 1-on-1 strategy consultation',
      'Review of your current academic and extracurricular profile',
      'Discussion of your university and program goals',
      'Profile positioning',
      'Identification of your strengths and gaps',
      'University application strategy',
      'Scholarship positioning guidance',
      'Personalized next-step roadmap',
      'Clear priorities for the next 6–12 months',
    ],
    promise: 'Know where you stand and exactly what to do next.',
    cta: 'Get My Strategy',
  },
  {
    slug: 'toolkit',
    name: 'Apex Toolkit',
    price: '339',
    tagline: '“Give me the strategy and the tools to do it.”',
    summary: 'Everything in Apex Strategy, plus the resources to execute the plan on your own.',
    inheritsFrom: 'Apex Strategy',
    features: [
      'Scholarship database',
      'University application resources',
      'Scholarship application resources',
      'Application timelines and checklists',
      'Essay and application frameworks',
      'Guidance for positioning extracurriculars',
      'Application planning resources',
      'Templates and practical tools',
      'Access to the Apex resource library',
    ],
    promise: 'Leave with the strategy and the tools to execute it yourself.',
    cta: 'Get the Toolkit',
    featured: true,
  },
  {
    slug: 'advantage',
    name: 'Apex Advantage',
    price: '549',
    tagline: '“Help me actually do it.”',
    summary: 'Everything in Apex Toolkit, plus hands-on support while you build and submit your applications.',
    inheritsFrom: 'Apex Toolkit',
    features: [
      'Application and essay edits',
      'Personalized feedback on your work',
      'Defined application review and revision support',
      'Guidance throughout the application process',
      'Access to the Apex network',
      'Introductions to relevant university students, professionals, or mentors where appropriate',
      'Additional personalized support',
    ],
    promise: 'Don’t just know what to do. Get support actually doing it.',
    cta: 'Get Apex Advantage',
  },
];

type Cell = boolean | string;

const comparison: { row: string; values: [Cell, Cell, Cell] }[] = [
  { row: 'Strategy consultation', values: ['2 hours', '2 hours', '2 hours'] },
  { row: 'Personalized profile assessment', values: [true, true, true] },
  { row: 'Positioning strategy', values: [true, true, true] },
  { row: 'Personalized roadmap', values: [true, true, true] },
  { row: 'Scholarship database', values: [false, true, true] },
  { row: 'Application resources', values: [false, true, true] },
  { row: 'Essay / application frameworks', values: [false, true, true] },
  { row: 'Application timeline', values: [false, true, true] },
  { row: 'Templates / checklists', values: [false, true, true] },
  { row: 'Application edits', values: [false, false, 'Defined scope'] },
  { row: 'Personalized application feedback', values: [false, false, true] },
  { row: 'Apex network access', values: [false, false, 'Where relevant'] },
];

const CellValue = ({ value, label }: { value: Cell; label: string }) => {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
        <span className="sr-only">{`Included in ${label}`}</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-hidden="true" />
        <span className="sr-only">{`Not included in ${label}`}</span>
      </>
    );
  }
  return <span className="text-[0.78rem] text-foreground/80">{value}</span>;
};

export const Packages = () => {
  return (
    <section id="packages" className="relative border-t border-primary/10 bg-section py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">Packages</span>
          <h2 className="section-heading mt-5">
            Three ways to work with <span className="text-primary">Apex</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Every package starts with the same personalized strategy session. From there, you choose how much support
            you want in actually executing the plan.
          </p>
        </div>

        {/* Package cards */}
        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.slug}
              className={`luxe-section-card relative flex h-full flex-col p-7 md:p-8 ${
                pkg.featured
                  ? 'border-primary/45 bg-section-card lg:-mt-4 lg:pb-10 shadow-[0_28px_60px_hsl(0_0%_0%/0.6)]'
                  : 'hover:border-primary/35'
              }`}
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 100}ms` }}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 rounded-full border border-primary/40 bg-primary px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Recommended
                </span>
              )}

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                Package {index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-foreground">{pkg.name}</h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="price-amount">${pkg.price}</span>
                <span className="pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  CAD
                </span>
              </div>
              <p className="mt-1 text-sm text-primary/90">{pkg.tagline}</p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>

              <div className="my-6 hairline" />

              {pkg.inheritsFrom && (
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Everything in {pkg.inheritsFrom}, plus:
                </p>
              )}

              <ul className="space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85">
                    <span className="check-dot">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {pkg.slug === 'advantage' && (
                <p className="mt-5 rounded-xl border border-section-border bg-section-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                  Editing and application support follow a defined scope: the exact number of documents and revision
                  rounds is confirmed in writing during purchase and onboarding. This is not an unlimited-edits service.
                </p>
              )}

              <div className="mt-auto pt-7">
                <p className="mb-5 text-sm font-semibold italic text-foreground/90">{pkg.promise}</p>
                <a
                  href={`/discovery-call?package=${pkg.slug}`}
                  className={`w-full ${pkg.featured ? 'btn-luxe-primary' : 'btn-luxe-outline'}`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mx-auto mt-10 max-w-3xl text-center" data-reveal="up">
          <p className="text-sm text-muted-foreground">
            Not sure which package fits?{' '}
            <a href="/discovery-call" className="font-semibold text-primary hover:underline">
              Book a free 15-minute call
            </a>{' '}
            and we&apos;ll help you figure out where you should start. All prices in CAD.
          </p>
        </div>

        {/* Comparison table on larger screens */}
        <div className="mx-auto mt-16 max-w-5xl" data-reveal="up">
          <h3 className="text-center text-xl font-bold tracking-[-0.01em] text-foreground md:text-2xl">
            Compare the packages
          </h3>

          <div className="mt-7 hidden overflow-x-auto rounded-2xl border border-section-border bg-section-card/70 md:block">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Feature comparison of the Apex Strategy, Toolkit and Advantage packages</caption>
              <thead>
                <tr className="border-b border-section-border">
                  <th scope="col" className="px-6 py-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    What&apos;s included
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.slug} scope="col" className="px-4 py-5 text-center">
                      <span className="block text-sm font-bold text-foreground">{pkg.name.replace('Apex ', '')}</span>
                      <span className="block text-xs text-primary">${pkg.price} CAD</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr
                    key={item.row}
                    className={index % 2 === 1 ? 'bg-section-muted/40' : undefined}
                  >
                    <th scope="row" className="px-6 py-3.5 text-sm font-normal text-foreground/85">
                      {item.row}
                    </th>
                    {item.values.map((value, columnIndex) => (
                      <td key={packages[columnIndex].slug} className="px-4 py-3.5 text-center">
                        <CellValue value={value} label={packages[columnIndex].name} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison stacked on mobile */}
          <div className="mt-7 space-y-4 md:hidden">
            {packages.map((pkg, columnIndex) => (
              <div key={pkg.slug} className="rounded-2xl border border-section-border bg-section-card/70 p-5">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-base font-bold text-foreground">{pkg.name}</h4>
                  <span className="text-sm font-semibold text-primary">${pkg.price} CAD</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {comparison.map((item) => {
                    const value = item.values[columnIndex];
                    return (
                      <li
                        key={item.row}
                        className={`flex items-start justify-between gap-3 text-sm ${
                          value === false ? 'text-muted-foreground/55' : 'text-foreground/85'
                        }`}
                      >
                        <span>{item.row}</span>
                        <span className="shrink-0 pt-0.5">
                          {value === true ? (
                            <Check className="h-4 w-4 text-primary" aria-label="Included" />
                          ) : value === false ? (
                            <Minus className="h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
                          ) : (
                            <span className="text-[0.75rem] text-foreground/80">{value}</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href={`/discovery-call?package=${pkg.slug}`}
                  className={`mt-5 w-full ${pkg.featured ? 'btn-luxe-primary' : 'btn-luxe-outline'} text-[0.7rem]`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
