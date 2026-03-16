import { ArrowRight, CalendarCheck2, Sparkles } from "lucide-react";

export const WorkshopSection = () => {
  return (
    <section
      id="workshops"
      className="relative overflow-hidden bg-section-muted py-16"
      data-reveal="up"
      data-section="homepage-workshops"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="luxe-section-card p-8 sm:p-10" data-reveal="left">
            <div className="luxe-kicker mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Free Workshop</span>
            </div>
            <h2 className="text-3xl font-bold text-section-foreground md:text-5xl">Free Workshop</h2>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-section-foreground md:text-4xl">
              What Top Students Do Differently in High School
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-section-muted-foreground md:text-lg">
              Learn how ambitious students begin building meaningful projects, leadership experiences, and initiatives
              early in high school.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Designed for Grade 9-10 students.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="/workshops" data-cta="homepage-workshop" className="btn-luxe-primary gap-2">
                Join the Free Workshop
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="text-sm text-section-muted-foreground">
                Limited seats per session to allow for discussion and Q&amp;A.
              </p>
            </div>
          </div>

          <div className="space-y-4" data-reveal="right" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="luxe-section-card p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                  <CalendarCheck2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">Why Students Join</p>
                  <p className="mt-2 text-lg font-semibold text-section-foreground">
                    Get practical direction before high school starts moving fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="luxe-section-card p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Inside The Session</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-section-muted-foreground">
                <li>How ambitious students start early without overloading themselves.</li>
                <li>What meaningful projects and leadership actually look like in Grade 9-10.</li>
                <li>How to turn curiosity into opportunities that compound over time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
