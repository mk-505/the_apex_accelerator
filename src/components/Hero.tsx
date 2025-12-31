import { useState, useEffect } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const heroTexts = [
  { text: 'The ', highlight: 'APEX', suffix: ' Accelerator' },
  { text: 'We help young people ', highlight: 'create', suffix: ' their futures' },
  { text: 'We level students up for ', highlight: 'top universities', suffix: '.' },
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
          alt="University campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {heroTexts[currentIndex].text}
          <span className="text-primary">{heroTexts[currentIndex].highlight}</span>
          {heroTexts[currentIndex].suffix}
        </h1>
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
