import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    outcome: 'Top Engineering Program',
    shortDesc: 'Schulich Scholarship recipient',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    description: 'The Apex Accelerator completely transformed my approach to applications. Their mentorship helped me see my achievements in a new light and present them compellingly. I got into my dream program and received the Schulich Leadership Scholarship.',
  },
  {
    name: 'Michael T.',
    outcome: 'Competitive Health Sciences Program',
    shortDesc: 'First-gen applicant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'As a first-generation applicant, I had no idea where to start. Manroop and Shaun broke down every step and made the process feel achievable. Their guidance on extracurriculars and personal statements was invaluable.',
  },
  {
    name: 'Emily C.',
    outcome: 'Top Computer Science Program',
    shortDesc: 'Co-op track accepted',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'I was struggling to stand out among thousands of applicants. The team helped me develop unique projects and frame my story in a way that got me noticed. I earned a spot in a competitive CS co-op track.',
  },
  {
    name: 'David K.',
    outcome: 'Top Business Program',
    shortDesc: 'From waitlist to accepted',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'I was initially waitlisted at my dream program. With Apex\'s help on my letter of continued interest, I turned that waitlist into an acceptance. Their support during the stressful waiting period was incredible.',
  },
];

export const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  return (
    <section id="testimonials" className="py-16 bg-section" data-reveal="zoom">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-reveal="up">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">
            Don't just take <span className="text-primary">our word</span> for it
          </h2>
          <p className="text-section-muted-foreground text-base max-w-2xl mx-auto" data-reveal="up" style={{ ['--reveal-delay' as string]: '100ms' }}>
            Hear from students who've transformed their futures with The <span className="text-primary font-semibold">Apex</span> Accelerator
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onClick={() => setSelectedTestimonial(testimonial)}
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
            onClick={() => setSelectedTestimonial(null)}
          >
            <div
              className="bg-section-card border border-section-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedTestimonial(null)}
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
                      <h3 className="text-xl font-bold text-section-foreground">{selectedTestimonial.name}</h3>
                      <p className="text-primary">{selectedTestimonial.outcome}</p>
                    </div>
                  </div>
                  <p className="text-section-muted-foreground leading-relaxed">
                    {selectedTestimonial.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
