import { Check, Minus } from 'lucide-react';
import { formatPrice, packages, UPGRADE_CREDIT } from '@/lib/packages';

type Cell = boolean | string;

const comparison: { row: string; values: [Cell, Cell, Cell] }[] = [
  { row: '2-hour 1-on-1 strategy session', values: [true, true, true] },
  { row: 'Written Apex Roadmap', values: [true, true, true] },
  { row: 'Reach / match / safe school list', values: [true, true, true] },
  { row: 'Scholarship shortlist', values: [true, true, true] },
  { row: 'Apex resource library', values: [true, true, true] },
  { row: '30-minute follow-up call', values: [true, true, true] },
  { row: '45-minute coaching sessions', values: [false, '6 over 3 months', '12 over 6 months'] },
  { row: 'Milestone tracking', values: [false, true, true] },
  { row: 'Message support between sessions', values: [false, true, true] },
  { row: 'Ongoing Discord community support', values: [false, true, true] },
  { row: 'Passion project guidance', values: [false, true, true] },
  { row: 'Updated next-phase roadmap', values: [false, true, true] },
  { row: 'Final school list + strategy per school', values: [false, false, true] },
  { row: 'Essay and application editing', values: [false, false, true] },
  { row: 'Scholarship application support', values: [false, false, true] },
  { row: 'Mock interview prep', values: [false, false, true] },
  { row: 'Networking guidance for connecting with students, researchers, and professionals', values: [false, true, true] },
];

const applicationAddOns = [
  {
    name: 'University application support',
    price: 449,
    description: 'University application writing support + edits, with ongoing community support in Discord.',
  },
  {
    name: 'Scholarship application support',
    price: 549,
    description: 'Scholarship application writing support + edits, with ongoing community support in Discord.',
  },
  {
    name: 'Complete application bundle',
    price: 849,
    description: 'University + scholarship application writing support and edits, with ongoing community support in Discord.',
    saving: 149,
  },
];

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://apexaccelerator.ca/#service',
  name: 'University & Scholarship Application Strategy',
  serviceType: 'University application consulting',
  description:
    'Personalized university and scholarship application strategy for Canadian high school students in Grades 9–12: a profile review, a written step-by-step roadmap, and optional coaching, essay editing and scholarship application support.',
  url: 'https://apexaccelerator.ca/#packages',
  provider: { '@id': 'https://apexaccelerator.ca/#organization' },
  areaServed: { '@type': 'Country', name: 'Canada' },
  audience: {
    '@type': 'EducationalAudience',
    educationalRole: 'student',
    audienceType: 'High school students in Grades 9–12 preparing for university admissions and scholarships',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Apex Packages',
    itemListElement: packages.map((pkg) => ({
      '@type': 'Offer',
      name: pkg.name,
      price: String(pkg.price),
      priceCurrency: 'CAD',
      url: `https://apexaccelerator.ca/discovery-call?package=${pkg.slug}`,
      description: [pkg.summary, pkg.inheritsFrom && `Everything in ${pkg.inheritsFrom}: ${pkg.features.join('; ')}.`, pkg.bestFor && `Best for: ${pkg.bestFor}.`]
        .filter(Boolean)
        .join(' '),
      itemOffered: {
        '@type': 'Service',
        name: `${pkg.name}: ${pkg.tagline.replace(/[“”]/g, '')}`,
        provider: { '@id': 'https://apexaccelerator.ca/#organization' },
      },
    })),
  },
};

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
    <section id="packages" className="relative border-t border-primary/10 bg-background py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />

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
                  ? 'border-primary/45 bg-section-card lg:-mt-4 lg:pb-10 [box-shadow:var(--shadow-strong)]'
                  : 'hover:border-primary/35'
              }`}
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 100}ms` }}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 rounded-full border border-primary/40 bg-primary px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Best value
                </span>
              )}

              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                Package {index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-foreground">{pkg.name}</h3>
              <p className="mt-1 text-sm text-primary/90">{pkg.tagline}</p>

              <div className="mt-5 flex items-end gap-2">
                <span className="price-amount">{formatPrice(pkg.price)}</span>
                <span className="pb-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  CAD
                </span>
              </div>
              {pkg.paymentPlan && <p className="mt-1 text-xs text-muted-foreground">or {pkg.paymentPlan}</p>}

              {pkg.bestFor && (
                <p className="mt-4 rounded-lg border border-section-border bg-section-muted px-3 py-2 text-xs text-foreground/85">
                  <span className="font-semibold text-primary">Best for:</span> {pkg.bestFor}
                </p>
              )}

              {pkg.summary && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{pkg.summary}</p>}

              <div className="my-6 hairline" />

              {pkg.inheritsFrom && (
                <p className="mb-4 text-sm font-semibold text-foreground">Everything in {pkg.inheritsFrom}:</p>
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

              {pkg.note && (
                <p className="mt-5 rounded-xl border border-section-border bg-section-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                  {pkg.note}
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

        <div className="mx-auto mt-6 max-w-6xl rounded-3xl border border-primary/15 bg-section-muted p-6 md:p-8" data-reveal="up">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
              Add to Package 1 or 2 <span className="mx-1 text-primary">/</span> All included in Package 3
            </h3>
            <p className="text-xs text-muted-foreground">With the application bundle: $1,098 with Strategy · $2,048 with Momentum</p>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3 md:divide-x md:divide-primary/20">
            {applicationAddOns.map((addon) => (
              <div key={addon.name} className="md:px-5 first:md:pl-0 last:md:pr-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold tracking-tight text-foreground">{formatPrice(addon.price)}</span>
                  {addon.saving && (
                    <span className="rounded-full bg-foreground px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-background">
                      Save {formatPrice(addon.saving)}
                    </span>
                  )}
                </div>
                <h4 className="mt-1 font-bold text-foreground">{addon.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Also available on their own. When added to a package, add-ons may only be purchased within 30 days of your initial package purchase.
            Discord community support is included with each application support add-on; add-ons do not include a consultation.
          </p>
        </div>

        {/* Upgrade credit + pricing note */}
        <div className="mx-auto mt-10 max-w-3xl text-center" data-reveal="up">
          <p className="luxe-panel inline-block px-5 py-3 text-sm font-semibold text-foreground">{UPGRADE_CREDIT}</p>
          <p className="mt-5 text-sm text-muted-foreground">
            Not sure which package fits?{' '}
            <a href="/discovery-call" className="font-semibold text-primary hover:underline">
              Book a free 15-minute call
            </a>{' '}
            and we&apos;ll help you figure out where to start. All prices in CAD.
          </p>
        </div>

        {/* Comparison table on larger screens */}
        <div className="mx-auto mt-16 max-w-5xl" data-reveal="up">
          <h3 className="text-center text-xl font-bold tracking-[-0.01em] text-foreground md:text-2xl">
            Compare the packages
          </h3>

          <div className="mt-7 hidden overflow-x-auto rounded-2xl border border-section-border bg-section-card/70 md:block">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Feature comparison of the Apex Strategy, Apex Momentum and Apex Advantage packages
              </caption>
              <thead>
                <tr className="border-b border-section-border">
                  <th scope="col" className="px-6 py-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    What&apos;s included
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.slug} scope="col" className="px-4 py-5 text-center">
                      <span className="block text-sm font-bold text-foreground">{pkg.name.replace('Apex ', '')}</span>
                      <span className="block text-xs text-primary">{formatPrice(pkg.price)} CAD</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={item.row} className={index % 2 === 1 ? 'bg-section-muted/40' : undefined}>
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
                  <span className="text-sm font-semibold text-primary">{formatPrice(pkg.price)} CAD</span>
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
