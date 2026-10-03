import { useLocation } from 'react-router-dom';
import logo from '@/assets/apex-logo.png';

const quickLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

const packageLinks = [
  { label: 'Apex Strategy · $199 CAD', href: '/discovery-call?package=strategy' },
  { label: 'Apex Toolkit · $339 CAD', href: '/discovery-call?package=toolkit' },
  { label: 'Apex Advantage · $549 CAD', href: '/discovery-call?package=advantage' },
];

export const Footer = () => {
  const location = useLocation();
  const resolveHref = (href: string) => (location.pathname === '/' ? href : `/${href}`);

  return (
    <footer className="border-t border-primary/15 bg-background/95">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="max-w-sm md:col-span-2">
            <img src={logo} alt="Apex Accelerator" className="mb-4 h-8 w-auto" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              University and scholarship application strategy for ambitious high school students across Canada. We
              assess your profile, position what you&apos;ve done, build your plan, and support you executing it.
            </p>
            <a
              href="mailto:contact@apexaccelerator.ca"
              className="mt-5 inline-block text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              contact@apexaccelerator.ca
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">Site</h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={resolveHref(link.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">Packages</h3>
            <div className="flex flex-col gap-3">
              {packageLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href="/discovery-call" className="btn-luxe-primary mt-5 inline-flex px-5 py-2.5 text-xs">
              Book a Free Call
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-primary/15 pt-6 md:flex-row md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Apex Accelerator. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground/70 md:text-right">
            Apex provides application strategy and preparation. Admissions and scholarship decisions are made by
            universities and scholarship organizations.
          </p>
        </div>
      </div>
    </footer>
  );
};
