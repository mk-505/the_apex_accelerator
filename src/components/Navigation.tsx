import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '@/assets/apex-logo.png';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Packages', href: '#packages' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const resolveHref = (href: string) => (location.pathname === '/' ? href : `/${href}`);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-primary/15' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href={resolveHref('#top')} className="flex items-center gap-3 group">
          <img src={logo} alt="Apex Accelerator" className="h-9 w-auto" />
          <div className="hidden sm:block">
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-primary/80">Application Strategy</p>
            <p className="text-sm font-semibold text-foreground/95 group-hover:text-primary transition-colors">
              The Apex Accelerator
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 rounded-full border border-primary/12 bg-card/40 px-6 py-2.5 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={resolveHref(item.href)}
              className="text-xs font-semibold uppercase tracking-[0.09em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="/discovery-call" className="btn-luxe-primary text-[0.68rem] px-5 py-2">
            Book a Free Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-primary/15">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={resolveHref(item.href)}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/discovery-call"
              onClick={() => setMobileOpen(false)}
              className="btn-luxe-primary text-[0.7rem] py-3.5"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
