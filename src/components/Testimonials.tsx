import { useState } from 'react';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Atish K.',
    outcome: 'Computer Engineering Student',
    shortDesc: 'Toronto Metropolitan University',
    image: '/atish.png',
    linkedinUrl: 'https://www.linkedin.com/in/atishk6ix/',
    description: 'Having known the founders since high school and seen their journey through both setbacks and successes, I can say their mentorship is grounded in real experience. As someone now involved in physics research and AI, I’ve seen how the mindset and guidance they promote can help students develop strong direction and confidence.',
  },
  {
    name: 'Poojan S.',
    outcome: 'BBA Student',
    shortDesc: 'Schulich School of Business',
    image: '/poojan.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/shahpoojan1/',
    description: 'Shaun and Manroop were incredibly helpful throughout the university application process. Their guidance made everything much clearer and helped me feel more confident. Their advice on improving my application played a key role in helping me land an offer from the Schulich School of Business, and their networking advice also helped me secure an internship at a major accounting firm. I highly recommend them to anyone going through the university admissions process or looking for guidance on their future career and overall direction.',
  },
  {
    name: 'Rhythm P.',
    outcome: 'Mechatronics Engineering',
    shortDesc: 'University of Waterloo',
    image: '/rhythm.png',
    linkedinUrl: 'https://www.linkedin.com/in/rhythm-panchal-b3a008288/',
    description: 'Shaun and Manroop were really helpful in shaping how I presented my experiences for my university applications. I had worked on machine learning research, software internships, startup growth, and social media, and they helped me bring everything together into a clear story that reflected my interests and personality. Their guidance helped refine my direction and made my applications much more cohesive. I would definitely recommend them to anyone applying to university.',
  },
];

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedTestimonial = selectedIndex !== null ? testimonials[selectedIndex] : null;
  const canGoPrev = selectedIndex !== null && selectedIndex > 0;
  const canGoNext = selectedIndex !== null && selectedIndex < testimonials.length - 1;

  return (
    <section id="testimonials" className="py-16 bg-section" data-reveal="zoom">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-reveal="up">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">
            Don't just take <span className="text-primary">our word</span> for it
          </h2>
          <p className="text-section-muted-foreground text-base max-w-2xl mx-auto" data-reveal="up" style={{ ['--reveal-delay' as string]: '100ms' }}>
            Hear from students who've transformed their futures with us! 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onClick={() => setSelectedIndex(index)}
              className="luxe-section-card rounded-xl p-6 cursor-pointer group hover:border-primary/45 hover:scale-[1.03] transition-all duration-300"
              data-reveal="pop"
              style={{ ['--reveal-delay' as string]: `${index * 110 + 120}ms` }}
            >
              <div className="flex justify-end">
                <span className="w-8 h-8 rounded-full border border-primary/35 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary/70 transition-colors duration-300"
              />
              <h3 className="font-bold text-section-foreground text-center">{testimonial.name}</h3>
              <p className="text-primary text-sm text-center mb-2">{testimonial.outcome}</p>
              <p className="text-section-muted-foreground text-sm text-center">{testimonial.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="bg-section-card border border-section-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => canGoPrev && setSelectedIndex((prev) => (prev !== null ? prev - 1 : prev))}
                    disabled={!canGoPrev}
                    className="p-2 rounded-lg border border-section-border transition-colors enabled:hover:bg-section-muted enabled:hover:border-primary/35 disabled:opacity-35 disabled:cursor-not-allowed"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-section-muted-foreground" />
                  </button>
                  <button
                    onClick={() => canGoNext && setSelectedIndex((prev) => (prev !== null ? prev + 1 : prev))}
                    disabled={!canGoNext}
                    className="p-2 rounded-lg border border-section-border transition-colors enabled:hover:bg-section-muted enabled:hover:border-primary/35 disabled:opacity-35 disabled:cursor-not-allowed"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-section-muted-foreground" />
                  </button>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 hover:bg-section-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-section-muted-foreground" />
                </button>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <a
                        href={selectedTestimonial.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-bold text-section-foreground transition-colors hover:text-primary"
                      >
                        {selectedTestimonial.name}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <p className="flex flex-wrap items-center gap-2">
                        <span className="text-primary">{selectedTestimonial.outcome}</span>
                        <span className="text-section-muted-foreground/60" aria-hidden="true">|</span>
                        <span className="text-section-muted-foreground text-sm">{selectedTestimonial.shortDesc}</span>
                      </p>
                    </div>
                  </div>
                  <blockquote className="relative rounded-xl border border-primary/25 bg-primary/5 px-8 py-7">
                    <span className="absolute left-4 top-2 text-4xl leading-none text-primary/45" aria-hidden="true">
                      "
                    </span>
                    <p className="text-section-muted-foreground leading-relaxed italic">
                      {selectedTestimonial.description}
                    </p>
                    <a
                      href={selectedTestimonial.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                    >
                      View LinkedIn
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <span className="absolute bottom-1 right-4 text-4xl leading-none text-primary/45" aria-hidden="true">
                      "
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
