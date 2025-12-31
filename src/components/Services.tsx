import { FileText, Users, Award, Compass, Lightbulb, UserCheck, ShieldCheck } from 'lucide-react';

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
    <section id="services" className="py-24 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">What We <span className="text-primary">Provide</span></h2>
          <p className="text-section-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive support for every aspect of your university journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-section-card border border-section-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-section-foreground mb-2">{service.title}</h3>
              <p className="text-section-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
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
