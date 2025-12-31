import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Services } from '@/components/Services';
import { Mindset } from '@/components/Mindset';
import { Video } from '@/components/Video';
import { Testimonials } from '@/components/Testimonials';
import { Apply } from '@/components/Apply';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Services />
      <Mindset />
      <Video />
      <Testimonials />
      <Apply />
      <Process />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
