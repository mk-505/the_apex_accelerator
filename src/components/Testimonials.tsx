import { useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Logo = { label: string; src: string };

const testimonials: {
  name: string;
  now: string;
  themes: string[];
  image: string;
  imageAlt: string;
  linkedinUrl: string;
  logos: Logo[];
  description: string;
}[] = [
  {
    name: 'Poojan S.',
    now: 'BBA at the Schulich School of Business',
    themes: ['Clarity', 'Application prep', 'Networking'],
    image: '/poojan.jpeg',
    imageAlt:
      'Poojan S., worked with the founders of The Apex Accelerator, now a BBA student at Schulich School of Business',
    linkedinUrl: 'https://www.linkedin.com/in/shahpoojan1/',
    logos: [
      { label: 'Schulich School of Business', src: '/logos/schulich.png' },
      { label: 'Deloitte', src: '/logos/deloitte.svg' },
    ],
    description:
      'Shaun and Manroop were incredibly helpful throughout the university application process. Their guidance made everything much clearer and helped me feel more confident. Their advice on improving my application played a key role in helping me land an offer from the Schulich School of Business, and their networking advice also helped me secure an internship at Deloitte. I highly recommend them to anyone going through the university admissions process or looking for guidance on their future career and overall direction.',
  },
  {
    name: 'Rhythm P.',
    now: 'Mechatronics Engineering at the University of Waterloo',
    themes: ['Positioning', 'Direction', 'Coherent story'],
    image: '/rhythm.png',
    imageAlt:
      'Rhythm P., worked with the founders of The Apex Accelerator, now in Mechatronics Engineering at University of Waterloo',
    linkedinUrl: 'https://www.linkedin.com/in/rhythm-panchal-b3a008288/',
    logos: [
      {
        label: 'University of Waterloo Engineering',
        src: '/logos/uwaterloo.png',
      },
      { label: 'Y Combinator', src: '/logos/ycombinator.png' },
    ],
    description:
      'Shaun and Manroop were really helpful in shaping how I presented my experiences for my university applications. I had worked on machine learning research, software internships, startup growth, and social media, and they helped me bring everything together into a clear story that reflected my interests and personality. Their guidance helped refine my direction and made my applications much more cohesive. I would definitely recommend them to anyone applying to university.',
  },
  {
    name: 'Sahil S.',
    now: 'Engineering at McMaster University',
    themes: ['Confidence', 'Structure', 'Direction'],
    image: '/sahil.png',
    imageAlt: 'Sahil S., worked with the founders of The Apex Accelerator, now in Engineering at McMaster University',
    linkedinUrl: 'https://www.linkedin.com/in/sahil-sachdeva-39bb11311/',
    logos: [{ label: 'McMaster University', src: '/logos/mcmaster.png' }],
    description:
      'Working with Shaun and Manroop was extremely helpful during my university application process. They helped me understand how to present my experiences clearly and structure my applications in a way that highlighted my strengths. Their guidance made the process much less stressful and gave me more confidence in my direction. I would definitely recommend them to any student navigating university applications or thinking about their future career path.',
  },
];

const Emblems = ({ logos, size = 'sm' }: { logos: Logo[]; size?: 'sm' | 'lg' }) => (
  <span className="inline-flex items-center gap-2.5">
    <span className="h-5 w-px bg-primary/30" aria-hidden="true" />
    {logos.map((logo) => (
      <img
        key={logo.label}
        src={logo.src}
        alt={logo.label}
        title={logo.label}
        className={`${size === 'lg' ? 'h-8 w-8' : 'h-7 w-7'} rounded-[5px] object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]`}
      />
    ))}
  </span>
);

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedTestimonial = selectedIndex !== null ? testimonials[selectedIndex] : null;
  const canGoPrev = selectedIndex !== null && selectedIndex > 0;
  const canGoNext = selectedIndex !== null && selectedIndex < testimonials.length - 1;

  return (
    <section id="testimonials" className="relative border-t border-primary/10 bg-background py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">In Their Words</span>
          <h2 className="section-heading mt-5">
            What students say about <span className="text-primary">working with us</span>
          </h2>
          <p className="section-sub mx-auto mt-5 max-w-2xl">
            Shared with permission. Each student describes their own experience in their own words, including anything
            they say about where they ended up.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="luxe-section-card group p-7 text-left hover:border-primary/40 hover:-translate-y-1"
              data-reveal="up"
              style={{ ['--reveal-delay' as string]: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  className="h-16 w-16 rounded-full border border-primary/25 object-cover"
                />
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                  <ArrowUpRight className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2.5">
                <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                <Emblems logos={testimonial.logos} />
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{testimonial.now}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {testimonial.themes.map((theme) => (
                  <li
                    key={theme}
                    className="rounded-full border border-section-border bg-section-muted px-3 py-1 text-[0.72rem] text-foreground/75"
                  >
                    {theme}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                Read the full quote
              </p>
            </button>
          ))}
        </div>

        <p
          className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground"
          data-reveal="up"
        >
          Apex doesn&apos;t claim credit for any admissions or scholarship decision. Universities and scholarship
          organizations make those calls.
        </p>

        {/* Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Testimonial from ${selectedTestimonial.name}`}
          >
            <div
              className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-section-border bg-section-card shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => canGoPrev && setSelectedIndex((prev) => (prev !== null ? prev - 1 : prev))}
                    disabled={!canGoPrev}
                    className="rounded-lg border border-section-border p-2 transition-colors enabled:hover:border-primary/35 enabled:hover:bg-section-muted disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => canGoNext && setSelectedIndex((prev) => (prev !== null ? prev + 1 : prev))}
                    disabled={!canGoNext}
                    className="rounded-lg border border-section-border p-2 transition-colors enabled:hover:border-primary/35 enabled:hover:bg-section-muted disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="rounded-lg p-2 transition-colors hover:bg-section-muted"
                  aria-label="Close testimonial"
                >
                  <X className="h-6 w-6 text-muted-foreground" />
                </button>
              </div>

              <div className="p-6 pt-0">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.imageAlt}
                    className="h-16 w-16 rounded-full border border-primary/25 object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <a
                        href={selectedTestimonial.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-primary"
                      >
                        {selectedTestimonial.name}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <Emblems logos={selectedTestimonial.logos} size="lg" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{selectedTestimonial.now}</p>
                  </div>
                </div>

                <blockquote className="relative rounded-xl border border-primary/20 bg-primary/5 px-8 py-7">
                  <span className="absolute left-4 top-2 text-4xl leading-none text-primary/40" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="leading-relaxed text-foreground/85">{selectedTestimonial.description}</p>
                  <footer className="mt-4 text-sm font-semibold text-primary">{selectedTestimonial.name}</footer>
                  <span className="absolute bottom-1 right-4 text-4xl leading-none text-primary/40" aria-hidden="true">
                    &rdquo;
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
