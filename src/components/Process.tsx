import { FileText, Phone, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Written Application',
    description: 'Tell us about yourself, your goals, and why you want to join',
  },
  {
    icon: Phone,
    title: 'Intro Call',
    description: 'A casual conversation to understand your needs and see if we\'re a fit',
  },
  {
    icon: CheckCircle,
    title: 'Potential Offer',
    description: 'If we\'re aligned, you\'ll receive an offer to join the program',
  },
  {
    icon: Rocket,
    title: 'Start the Program',
    description: 'Begin your journey to your dream university with our full support',
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">How It <span className="text-primary">Works</span></h2>
          <p className="text-section-muted-foreground text-lg max-w-2xl mx-auto">
            Our simple 4-step process to get you started
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-section-border" />
                )}

                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mx-auto mb-4 relative z-10 bg-section">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-20">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-bold text-section-foreground mb-2">{step.title}</h3>
                <p className="text-section-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
