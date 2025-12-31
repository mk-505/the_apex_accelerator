import { GraduationCap, Award, Globe } from 'lucide-react';

const founders = [
  {
    name: 'Manroop',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    achievements: [
      'Engineering Science at University of Toronto',
      'Accepted to every university he applied to',
      'Schulich Leadership Scholarship offers from UofT, McMaster & Western',
      'Chose UofT for his undergraduate studies',
    ],
    icon: GraduationCap,
  },
  {
    name: 'Shaun',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    achievements: [
      'Engineering Science at University of Toronto',
      'Accepted to all programs he applied to',
      'Prestigious scholarship recipient with multiple offers',
      'Accepted to top US universities including Stanford',
    ],
    icon: Globe,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">Meet the <span className="text-primary">Founders</span></h2>
          <p className="text-section-muted-foreground text-lg max-w-2xl mx-auto">
            Young leaders who've navigated the exact journey you're about to take
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-section-card border border-section-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <founder.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-section-foreground">{founder.name}</h3>
                <p className="text-primary font-medium">{founder.role}</p>
              </div>

              <ul className="space-y-3">
                {founder.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-section-muted-foreground">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-section-card border border-section-border inline-block rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-section-foreground mb-3">Plus Our <span className="text-primary">Extended Team</span></h3>
            <p className="text-section-muted-foreground max-w-xl">
              A network of mentors from top universities across Canada and the US,
              ready to guide you on your unique path to success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
