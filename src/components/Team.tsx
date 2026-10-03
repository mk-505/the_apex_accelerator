import { ArrowUpRight, Award, ExternalLink } from 'lucide-react';

const manroopSchulichUrl = 'https://engsci.utoronto.ca/meet-engscis-2023-schulich-leaders/';

const founders = [
  {
    name: 'Manroop',
    role: 'Co-Founder',
    image: '/manroop.png',
    imageAlt: 'Manroop Kalsi, Co-Founder of The Apex Accelerator, UofT Engineering Science, Schulich Leader',
    intro: 'UofT Engineering Science',
    highlights: [
      'Schulich Leader offer at multiple schools ($120K each)',
      'Received the Principal’s Award of Academic Achievement',
      'AI research in Human Computer Interactions (HCI)',
      'Partnered with a mobile health clinic to implement digital patient records in Ghana at 16',
      'High school: DECA President, Robotics Team Lead, Hack Club Chapter Co-Founder',
    ],
    linkedInUrl: 'https://www.linkedin.com/in/manroop-kalsi/',
    portfolioUrl: 'https://manroopkalsi.vercel.app/',
  },
  {
    name: 'Shaun',
    role: 'Co-Founder',
    image: '/shaun.png',
    imageAlt: 'Shaun Arulanandam, Co-Founder of The Apex Accelerator, UofT Engineering Science, AI researcher at Cornell and UofT',
    intro: 'UofT Engineering Science',
    highlights: [
      'Accepted across STEM programs with multiple major scholarships',
      'Top six average: 98.5%',
      'AI research in Diffusion Models and LLMs at Cornell and UofT',
      'Has been building businesses and turning ideas into revenue since early high school',
      'High school: Founder and President of Math Club, Debate Club Executive, various fundraisers',
    ],
    linkedInUrl: 'https://www.linkedin.com/in/shaun-arulanandam-85a43b266/',
    portfolioUrl: 'https://spotify-clone-portfolio-shaun6359s-projects.vercel.app/',
  },
];

export const Team = () => {
  return (
    <section id="about" className="relative border-t border-primary/10 bg-section py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">Why Apex</span>
          <h2 className="section-heading mt-5">
            We&apos;ve recently been through this <span className="text-primary">process ourselves.</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Apex was built by students who navigated competitive Canadian university admissions, major scholarships,
            extracurricular positioning, projects, and opportunities, recently enough to remember exactly how
            unstructured it felt. We&apos;re making that process structured for the students coming after us.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="luxe-section-card p-7 md:p-8 hover:border-primary/35 hover:-translate-y-1"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 110}ms` }}
            >
              <div className="mb-6 flex items-start gap-5">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="h-20 w-20 shrink-0 rounded-2xl border border-primary/25 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.01em] text-foreground">{founder.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-primary">{founder.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{founder.intro}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {founder.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm leading-snug text-foreground/85">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {founder.name === 'Manroop' && highlight.startsWith('Schulich Leader') ? (
                      <span>
                        {highlight}{' '}
                        <a
                          href={manroopSchulichUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Open Schulich Leader article"
                          className="inline-flex align-middle text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </span>
                    ) : (
                      <span>{highlight}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-section-border pt-5">
                <a
                  href={founder.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={founder.portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
                >
                  <ExternalLink className="h-4 w-4" />
                  Portfolio
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground" data-reveal="up">
          Our own results are context for how we think about applications, not a promise of what any student will
          receive. Admissions and scholarship decisions are made by universities and scholarship organizations.
        </p>
      </div>
    </section>
  );
};
