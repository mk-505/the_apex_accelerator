import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Process } from '@/components/Process';
import { Packages } from '@/components/Packages';
import { WhoFor } from '@/components/WhoFor';
import { Team } from '@/components/Team';
import { Network } from '@/components/Network';
import { Difference } from '@/components/Difference';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <Process />
      <Packages />
      <WhoFor />
      <Team />
      <Network />
      <Difference />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
