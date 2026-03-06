export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-section-muted" data-reveal="zoom">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-section-border bg-section-card px-8 py-12 md:px-12 text-center" data-reveal="zoom">
          <h2 className="text-3xl md:text-4xl font-bold text-section-foreground mb-4" data-reveal="up">
            Questions?
          </h2>
          <p
            className="text-section-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
            data-reveal="up"
            style={{ ['--reveal-delay' as string]: '100ms' }}
          >
            If you have any questions, please feel free to reach out to us at{' '}
            <a
              href="mailto:contact@apexaccelerator.ca"
              className="font-semibold text-primary hover:opacity-85 transition-opacity"
            >
              contact@apexaccelerator.ca
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
