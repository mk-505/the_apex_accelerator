export const About = () => {
  return (
    <section id="about" className="py-16 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="luxe-kicker mb-5 animate-fade-in">Our Edge</span>
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-8 animate-slide-up [animation-delay:120ms]">
            We <span className="text-primary">understand</span> you.
          </h2>
          <p className="text-lg md:text-xl text-section-muted-foreground leading-relaxed animate-slide-up [animation-delay:240ms]">
            We were just in your shoes - and this is what we were able to <span className="text-primary font-semibold">accomplish</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
