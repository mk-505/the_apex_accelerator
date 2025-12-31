import { useState } from 'react';
import { X, Play, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    university: 'UofT Engineering',
    shortDesc: 'Schulich Scholarship recipient',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    description: 'The Apex Accelerator completely transformed my approach to university applications. Their mentorship helped me see my achievements in a new light and present them compellingly. I not only got into my dream program but also received the Schulich Leadership Scholarship!',
    hasVideo: true,
  },
  {
    name: 'Michael T.',
    university: 'McGill Medicine',
    shortDesc: 'First-gen university student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'As a first-generation university student, I had no idea where to start. Manroop and Shaun broke down every step and made the process feel achievable. Their guidance on extracurriculars and personal statements was invaluable.',
    hasVideo: false,
  },
  {
    name: 'Emily C.',
    university: 'Waterloo CS',
    shortDesc: 'Coop program accepted',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    description: 'I was struggling to stand out among thousands of applicants. The team helped me develop unique projects and frame my story in a way that got me noticed. Now I\'m in the CS co-op program at Waterloo!',
    hasVideo: true,
  },
  {
    name: 'David K.',
    university: 'Queen\'s Commerce',
    shortDesc: 'From waitlist to accepted',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'I was initially waitlisted at my dream school. With Apex\'s help on my letter of continued interest, I turned that waitlist into an acceptance. Their support during the stressful waiting period was incredible.',
    hasVideo: false,
  },
];

export const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">
            Don't just take <span className="text-primary">our word</span> for it
          </h2>
          <p className="text-section-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from students who've transformed their futures with The <span className="text-primary font-semibold">Apex</span> Accelerator
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              onClick={() => setSelectedTestimonial(testimonial)}
              className="bg-section-card border border-section-border rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-primary/30"
              />
              <h3 className="font-bold text-section-foreground text-center">{testimonial.name}</h3>
              <p className="text-primary text-sm text-center mb-2">{testimonial.university}</p>
              <p className="text-section-muted-foreground text-sm text-center">{testimonial.shortDesc}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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

              <div className="grid md:grid-cols-2 gap-8 p-6 pt-0">
                {/* Video Side */}
                <div className="aspect-video bg-section-muted rounded-xl flex items-center justify-center">
                  {selectedTestimonial.hasVideo ? (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-primary transition-colors">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      </div>
                      <p className="text-section-muted-foreground text-sm">Play video testimonial</p>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <Quote className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                      <p className="text-section-muted-foreground text-sm">Written testimonial</p>
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-section-foreground">{selectedTestimonial.name}</h3>
                      <p className="text-primary">{selectedTestimonial.university}</p>
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
