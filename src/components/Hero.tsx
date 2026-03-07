import { useState, useEffect } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const heroTexts = [
  { text: 'The ', highlight: 'APEX', suffix: ' Accelerator' },
  { text: 'We help young people ', highlight: 'create', suffix: ' their futures' },
  { text: 'We level students up for ', highlight: 'top programs', suffix: '.' },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Students collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,hsl(38_62%_58%_/_0.26),transparent_36%),radial-gradient(circle_at_82%_0%,hsl(40_55%_60%_/_0.2),transparent_32%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="luxe-kicker mb-8 animate-drift">
          <span>Admissions Strategy</span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span>Elite Results</span>
        </div>
        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {heroTexts[currentIndex].text}
          <span className="text-primary">{heroTexts[currentIndex].highlight}</span>
          {heroTexts[currentIndex].suffix}
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base md:text-lg text-foreground/80">
          A selective mentorship accelerator where ambitious students develop direction, build meaningful projects, and position themselves for top universities and future careers.

        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#apply" className="btn-luxe-primary">
            Apply For A Spot
          </a>
          <a href="#services" className="btn-luxe-ghost">
            Explore Program
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="luxe-panel px-5 py-4 text-left">
            <p className="text-primary text-xs uppercase tracking-[0.14em]">Mentorship</p>
            <p className="text-foreground text-lg font-semibold">1-on-1 mentorship and small cohort guidance</p>
          </div>
          <div className="luxe-panel px-5 py-4 text-left">
            <p className="text-primary text-xs uppercase tracking-[0.14em]">Projects & Personal Brand</p>
            <p className="text-foreground text-lg font-semibold">Build projects and develop a personal brand</p>
          </div>
          <div className="luxe-panel px-5 py-4 text-left">
            <p className="text-primary text-xs uppercase tracking-[0.14em]">University & Career Positioning</p>
            <p className="text-foreground text-lg font-semibold">Strategic guidance for universities and beyond</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
