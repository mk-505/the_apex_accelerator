import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const cardsWithoutReveal = Array.from(
      document.querySelectorAll<HTMLElement>('.luxe-section-card:not([data-reveal]), .luxe-panel:not([data-reveal])'),
    );
    cardsWithoutReveal.forEach((card, index) => {
      card.setAttribute('data-reveal', index % 2 === 0 ? 'left' : 'right');
    });

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-reveal], .animate-slide-up, .animate-fade-in, [data-scroll-item], .luxe-section-card, .luxe-panel',
      ),
    );
    if (targets.length === 0) return;

    document.body.classList.add('has-scroll-reveal');

    targets.forEach((target) => {
      if (target.matches('.animate-slide-up, .animate-fade-in')) {
        target.setAttribute('data-scroll-animate', 'true');
      }
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.body.classList.remove('has-scroll-reveal');
    };
  }, []);
};
