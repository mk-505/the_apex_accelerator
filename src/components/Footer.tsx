import logo from '@/assets/apex-logo.png';

export const Footer = () => {
  const quickLinks = [
    { label: 'Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-primary/15 bg-background/95" data-reveal="up">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Apex Accelerator" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Private mentorship for ambitious students applying to top programs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-4">
              Reach Out
            </h3>
            <a
              href="mailto:contact@apexaccelerator.ca"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@apexaccelerator.ca
            </a>
            <div className="mt-5">
              <a
                href="https://bit.ly/apply-apex-accelerator"
                target="_blank"
                rel="noreferrer"
                className="btn-luxe-primary text-xs px-5 py-2.5 inline-flex"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Apex Accelerator. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
            Built for high-performing applicants
          </p>
        </div>
      </div>
    </footer>
  );
};
