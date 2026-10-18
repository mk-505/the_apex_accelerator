import { useLocation } from 'react-router-dom';
import logo from '@/assets/apex-logo.png';
import { formatPrice, packages } from '@/lib/packages';

const quickLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'Your Roadmap', href: '#roadmap' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

const packageLinks = packages.map((pkg) => ({
  label: `${pkg.name} · ${formatPrice(pkg.price)} CAD`,
  href: `/discovery-call?package=${pkg.slug}`,
}));

export const Footer = () => {
  const location = useLocation();
  const resolveHref = (href: string) => (location.pathname === '/' ? href : `/${href}`);

  return (
    <footer className="border-t border-primary/15 bg-background/95">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="max-w-sm md:col-span-2">
            <img src={logo} alt="Apex Accelerator" className="theme-dark-only mb-4 h-8 w-auto" />
            <img
              src="/APEX_LOGO_WHITE-removebg-preview.png"
              alt="Apex Accelerator"
              className="theme-light-only mb-4 h-8 w-auto"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              University and scholarship application strategy for ambitious high school students across Canada, based in
              Toronto. We review your profile, give you a written step-by-step roadmap, and support you while you carry
              it out.
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
