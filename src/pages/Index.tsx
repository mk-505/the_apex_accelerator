import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Team } from '@/components/Team';
import { Services } from '@/components/Services';
import { Mindset } from '@/components/Mindset';
import { Video } from '@/components/Video';
import { Testimonials } from '@/components/Testimonials';
import { Apply } from '@/components/Apply';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Team />
      <Services />
      <Mindset />
      <Video />
      <Testimonials />
      <Apply />
      <Process />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
