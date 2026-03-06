import { FileText, Users, Award, Compass, Lightbulb, UserCheck, ShieldCheck } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const services = [
  {
    icon: FileText,
    title: 'University Applications Feedback',
    description: 'Detailed reviews and strategic improvements for your applications',
  },
  {
    icon: Users,
    title: 'Mock Interviews',
    description: 'Practice sessions to prepare you for university interviews',
  },
  {
    icon: Award,
    title: 'Scholarship Guidance',
    description: 'Application strategies and feedback for major scholarships',
  },
  {
    icon: Compass,
    title: 'Extracurricular Planning',
    description: 'Structure your ECs to stand out and tell a compelling story',
  },
  {
    icon: Lightbulb,
    title: 'Story Framing',
    description: 'Craft a unique narrative that showcases your authentic self',
  },
  {
    icon: UserCheck,
    title: '1-on-1 Mentoring',
    description: 'Personalized guidance tailored to your goals and timeline',
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-16 bg-section-muted overflow-hidden" data-reveal="zoom">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16" data-reveal="up">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">What We <span className="text-primary">Provide</span></h2>
        </div>

        <div className="max-w-6xl mx-auto mb-12" data-reveal="up" style={{ ['--reveal-delay' as string]: '140ms' }}>
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
            className="w-full"
          >
            <div className="mb-5 flex items-center justify-end">
              <div className="flex items-center gap-2">
                <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-xl border border-primary/40 bg-section-card text-primary hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="static translate-y-0 h-11 w-11 rounded-xl border border-primary/40 bg-section-card text-primary hover:bg-primary hover:text-primary-foreground" />
              </div>
            </div>

            <CarouselContent className="-ml-6">
              {services.map((service, index) => (
                <CarouselItem
                  key={service.title}
                  className="pl-6 basis-[88%] sm:basis-[52%] lg:basis-[32%]"
                >
                  <div
                    className="luxe-section-card relative rounded-xl p-6 group hover:border-primary/45 hover:-translate-y-2 h-full"
                    data-reveal="pop"
                    style={{ ['--reveal-delay' as string]: `${index * 90 + 180}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/10" />
                      <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-shimmer-sweep" />
                    </div>

                    <div className="relative z-10 animate-float-slow" style={{ animationDelay: `${index * 140}ms`, animationDuration: `${5.6 + (index % 3) * 0.5}s` }}>
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110 group-hover:rotate-3">
                        <service.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-lg font-bold text-section-foreground mb-2">{service.title}</h3>
                      <p className="text-section-muted-foreground text-sm">{service.description}</p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none mt-4 h-1.5 w-full rounded-full bg-section-border/70">
            <div className="h-full w-1/3 rounded-full bg-primary/55" />
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-section-card to-primary/5 p-8 text-center shadow-sm"
            data-reveal="zoom"
            style={{ ['--reveal-delay' as string]: '360ms' }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-section-foreground mb-3">Money Back <span className="text-primary">Guarantee</span></h3>
            <p className="text-section-muted-foreground text-lg">
              If you don't get accepted to one of your <span className="text-primary font-semibold">top 3 universities</span>, we'll give you a full refund.
              That's how confident we are in our program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
