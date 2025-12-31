export const About = () => {
  return (
    <section id="about" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-8">
            We <span className="text-primary">understand</span> you.
          </h2>
          <p className="text-xl md:text-2xl text-section-muted-foreground leading-relaxed">
            We were just in your shoes—and this is what we were able to <span className="text-primary font-semibold">accomplish</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
