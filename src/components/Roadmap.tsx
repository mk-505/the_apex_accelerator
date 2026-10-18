import { FileText, LayoutDashboard, PlayCircle } from 'lucide-react';

const sections = [
  { title: 'Snapshot', copy: 'Your targets, your one-line positioning, and the three things that matter most.' },
  { title: 'Where you stand', copy: 'Your marks against target averages, your activities ranked, strengths and gaps.' },
  { title: 'Goal and positioning', copy: 'Your reach / match / safe list and what your application should make readers remember.' },
  { title: 'Habits', copy: 'The two or three habits to fix first, with a system to track each one.' },
  { title: 'Academic plan', copy: 'Course selection, prerequisite check and grade targets.' },
  { title: 'The big moves', copy: 'Step-by-step playbooks for research, an internship, a passion project or competitions.' },
  { title: 'Extracurricular edits', copy: 'What to keep, deepen or cut, and how to turn involvement into leadership.' },
  { title: 'Scholarship plan', copy: 'A shortlist matched to you, what each one values, and what to build now.' },
  { title: 'Your week', copy: 'An actual weekly schedule, for the school year and for the summer.' },
  { title: 'Timeline', copy: 'Month by month, with OUAC, scholarship and summer program deadlines.' },
  { title: 'Next 30 days', copy: 'A dated checklist of specific tasks. The page you will use most.' },
];

const formats = [
  { icon: FileText, title: 'PDF summary', copy: 'A 3–4 page overview for students and parents to read and print.' },
  { icon: LayoutDashboard, title: 'Notion workspace', copy: 'Your working copy, with checklists, trackers and playbooks. You own it.' },
  { icon: PlayCircle, title: 'Video walkthrough', copy: 'A 5–10 minute recorded walkthrough that ties it all together.' },
];

const Redacted = ({ width }: { width: string }) => (
  <span
    className="inline-block h-2.5 rounded-full bg-foreground/20 align-middle blur-[1.5px]"
    style={{ width }}
    aria-hidden="true"
  />
);

const SampleRoadmap = () => (
  <figure className="relative" aria-label="Illustrative sample of an Apex Roadmap snapshot page, with details redacted">
    <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,hsl(40_53%_64%_/_0.14),transparent_65%)]" />
    <div className="relative rotate-[-1.2deg] rounded-2xl border border-primary/25 bg-section-card p-6 [box-shadow:var(--shadow-strong)] md:p-8">
      <div className="flex items-center justify-between border-b border-section-border pb-4">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary">Apex Roadmap · Snapshot</p>
        <p className="text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">Page 1</p>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-xs">
        <div>
          <dt className="uppercase tracking-[0.14em] text-muted-foreground">Student</dt>
          <dd className="mt-1.5"><Redacted width="70%" /></dd>
        </div>
        <div>
          <dt className="uppercase tracking-[0.14em] text-muted-foreground">Grade</dt>
          <dd className="mt-1 font-semibold text-foreground">Grade 11 · Ontario</dd>
        </div>
        <div className="col-span-2">
          <dt className="uppercase tracking-[0.14em] text-muted-foreground">Targets</dt>
          <dd className="mt-1 text-foreground/85">
            Engineering <span className="text-primary">(reach)</span> · Computer Science{' '}
            <span className="text-primary">(match)</span> · <Redacted width="22%" />
          </dd>
        </div>
      </dl>

      <div className="mt-5 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary">Positioning</p>
        <p className="mt-1.5 text-sm text-foreground">
          &ldquo;The student who <Redacted width="38%" /> <Redacted width="24%" />&rdquo;
        </p>
      </div>

      <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary">If you only do three things</p>
      <ol className="mt-2 space-y-2.5 text-sm text-foreground/85">
        <li className="flex gap-3">
          <span className="font-bold text-primary">1</span>
          <span>Email 5 professors about <Redacted width="40%" /> by Nov 15</span>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary">2</span>
          <span>Launch <Redacted width="30%" /> and reach <Redacted width="18%" /></span>
        </li>
        <li className="flex gap-3">
          <span className="font-bold text-primary">3</span>
          <span>Raise <Redacted width="24%" /> to 90+ before midterms</span>
        </li>
      </ol>

      <div className="mt-6 space-y-2" aria-hidden="true">
        <Redacted width="100%" />
        <Redacted width="86%" />
        <Redacted width="64%" />
      </div>
    </div>
    <figcaption className="mt-5 text-center text-xs text-muted-foreground">
      Illustrative sample. Personal details are redacted.
    </figcaption>
  </figure>
);

export const Roadmap = () => {
  return (
    <section id="roadmap" className="relative overflow-hidden border-t border-primary/10 bg-section py-20 md:py-28">
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">What You Get</span>
          <h2 className="section-heading mt-5">
            What&apos;s in your <span className="text-primary">Apex Roadmap</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Every package includes a written, personalized plan for the next 6–12 months, delivered within 3 business
            days of your session. It lays out everything you need to do, in order.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div data-reveal="left">
            <ol className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {sections.map((section, index) => (
                <li key={section.title} className="flex gap-3">
                  <span className="mt-0.5 w-6 shrink-0 text-xs font-bold tabular-nums text-primary">
                    {String(index).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{section.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">{section.copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="mt-10 border-l-2 border-primary/60 pl-5 text-base italic text-foreground/85">
              Every action item has to pass one test: could you do it tomorrow without needing to ask us a question?
            </blockquote>
          </div>

          <div data-reveal="right">
            <SampleRoadmap />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className="luxe-panel px-6 py-6"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <format.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{format.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{format.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
