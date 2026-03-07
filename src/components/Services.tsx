import { FileText, Users, Award, Compass, Lightbulb, UserCheck } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Personal Brand Development',
    description: 'Define the interests and initiatives that shape your long-term narrative.',
  },
  {
    icon: Compass,
    title: 'Project & Initiative Building',
    description: 'Design and launch meaningful projects that demonstrate leadership and impact.',
  },
  {
    icon: FileText,
    title: 'University Application Strategy',
    description: 'Develop a clear strategy for competitive programs and admissions timelines.',
  },
  {
    icon: Award,
    title: 'Scholarship Positioning',
    description: 'Structure applications and profiles to compete for major scholarships.',
  },
  {
    icon: Users,
    title: 'Interview Preparation',
    description: 'Practice interviews and communication skills for competitive admissions.',
  },
  {
    icon: UserCheck,
    title: '1-on-1 Mentorship',
    description: 'Personalized guidance tailored to your goals, timeline, and ambitions.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" data-reveal="up" style={{ ['--reveal-delay' as string]: '140ms' }}>
          {services.map((service, index) => (
            <div
              key={service.title}
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
          ))}
        </div>
      </div>
    </section>
  );
};
