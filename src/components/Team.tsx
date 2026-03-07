import { GraduationCap, Award, Sparkles, ExternalLink } from 'lucide-react';

const manroopSchulichUrl = 'https://engsci.utoronto.ca/meet-engscis-2023-schulich-leaders/';

const founders = [
  {
    name: 'Manroop',
    role: 'Co-Founder',
    image: 'src/assets/manroop.png',
    intro: 'UofT Engineering Science',
    highlights: [
      'Schulich Leader at multiple schools ($120K each)',
      'Recieved Principals Award of Academic Achievement',
      'AI research in Human Computer Interactions (HCI)',
      'Fun Fact: Manroop partnered with a mobile health clinic to implement digital patient records in Ghana at 16 years old',
      'Schools ECs: DECA President, Robotics Team Lead, Hack Club Chapter Co-Founder',
    ],
    linkedInUrl: 'https://www.linkedin.com/in/manroop-kalsi/',
    portfolioUrl: 'https://manroopkalsi.vercel.app/',
  },
  {
    name: 'Shaun',
    role: 'Co-Founder',
    image: 'src/assets/shaun.png',
    intro: 'UofT Engineering Science',
    highlights: [
      'Accepted across STEM programs with multiple major scholarships',
      'Top 6 Avergage: 98.5%',
      'AI research in Diffusion Models and LLMs at Cornell and UofT',
      'Fun Fact: Shaun has been building businesses and learning how to turn ideas into revenue since he was young',
      'School ECs: President and Founder of Math Club, Debate Club Executive, Various Fundraisers',
    ],
    linkedInUrl: 'https://www.linkedin.com/in/shaun-arulanandam-85a43b266/',
    portfolioUrl: 'https://shaun-ar.ca',
  },
];

export const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="luxe-kicker mb-5">Meet the Team</span>
          <h2 className="text-4xl md:text-6xl font-bold text-section-foreground mb-4">
            Meet the <span className="text-primary">Founders</span>
          </h2>
          <p className="text-section-muted-foreground text-lg max-w-3xl mx-auto">
            Real outcomes from mentors who recently went through this process and won at the highest level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder) => (
            <div key={founder.name} className="luxe-section-card p-8 hover:border-primary/45 hover:-translate-y-1">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 rounded-2xl object-cover border-2 border-primary/25"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-section-foreground leading-none">{founder.name}</h3>
                  <p className="text-primary font-semibold mt-1">{founder.role}</p>
                  <p className="text-section-muted-foreground mt-3">{founder.intro}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {founder.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-section-foreground/90">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </span>
                    ) : (
                      <span>{highlight}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="border-t border-section-border pt-5">
                <p className="text-sm text-section-muted-foreground">
                  LinkedIn:{' '}
                  <a
                    href={founder.linkedInUrl}
                    className="text-primary font-semibold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn URL
                  </a>
                </p>
                <p className="text-sm text-section-muted-foreground mt-2">
                  Personal Portfolio:{' '}
                  <a
                    href={founder.portfolioUrl}
                    className="text-primary font-semibold hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Portfolio
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="luxe-section-card inline-flex items-center gap-3 p-6 max-w-3xl">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <p className="text-section-muted-foreground text-left">
              Plus an extended mentor network across top Canadian and US programs to support your specific path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
