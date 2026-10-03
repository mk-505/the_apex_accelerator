import { GraduationCap, Briefcase, Users, Microscope } from 'lucide-react';

const groups = [
  { icon: GraduationCap, label: 'University students', detail: 'Across engineering, business, life sciences, CS, and more' },
  { icon: Microscope, label: 'Researchers', detail: 'Students and graduates working in research settings' },
  { icon: Briefcase, label: 'Professionals', detail: 'People a few years into industry and entrepreneurship' },
  { icon: Users, label: 'Mentors', detail: 'Graduates who have been through the same applications' },
];

export const Network = () => {
  return (
    <section className="relative overflow-hidden border-t border-primary/10 bg-background py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,hsl(40_53%_64%_/_0.07),transparent_42%)]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div data-reveal="left">
            <span className="section-eyebrow">The Apex Network</span>
            <h2 className="section-heading mt-5">
              Guidance from people who&apos;ve <span className="text-primary">actually been there.</span>
            </h2>
            <p className="section-sub mt-5">
              Beyond the two of us, Apex has a broader network of university students, graduates, professionals, and
              mentors across different programs and career paths. When a student&apos;s questions are better answered by
              someone already inside that program or field, we try to connect them.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Network access is included with <span className="font-semibold text-foreground">Apex Advantage</span>,
              where relevant and appropriate. We don&apos;t promise a specific introduction or a specific person, only
              that we&apos;ll use the network we have when it genuinely helps.
            </p>
            <a href="#packages" className="btn-luxe-outline mt-8">
              See What&apos;s Included
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-reveal="right">
            {groups.map((group, index) => (
              <div
                key={group.label}
                className="luxe-section-card p-6 hover:border-primary/35"
                data-reveal="up"
                style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                  <group.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{group.label}</h3>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{group.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
