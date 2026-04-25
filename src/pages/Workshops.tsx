import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Lightbulb, Rocket, Sparkles, Target } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WorkshopCard } from "@/components/workshops/WorkshopCard";
import { WorkshopSignupForm } from "@/components/workshops/WorkshopSignupForm";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { workshops } from "@/lib/workshops";

const benefits = [
  "Learn what strong students do differently early on",
  "See examples of meaningful student projects and initiatives",
  "Understand how to build experiences beyond grades",
  "Leave with practical ideas you can start acting on",
];

const benefitIcons = [Rocket, Lightbulb, Target, CheckCircle2];

const Workshops = () => {
  const [selectedWorkshopId, setSelectedWorkshopId] = useState(workshops[0]?.id ?? "");
  const signupRef = useRef<HTMLElement | null>(null);

  useScrollReveal();

  useEffect(() => {
    const PAGE_URL = "https://apexaccelerator.ca/workshops";
    const PAGE_TITLE = "Free High School Workshops for Grade 9-10 Students | Apex Accelerator";
    const PAGE_DESC =
      "Join free virtual workshops for ambitious Grade 9-10 students in Canada. Learn what top students do differently, how to build meaningful projects, and how to stand out for top universities.";

    document.title = PAGE_TITLE;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name')) el.setAttribute("name", attr);
        else el.setAttribute("property", attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "description", PAGE_DESC);
    setMeta('meta[name="robots"]', "robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setLink("canonical", PAGE_URL);

    setMeta('meta[property="og:type"]', "og:type", "website");
    setMeta('meta[property="og:url"]', "og:url", PAGE_URL);
    setMeta('meta[property="og:title"]', "og:title", PAGE_TITLE);
    setMeta('meta[property="og:description"]', "og:description", PAGE_DESC);
    setMeta('meta[property="og:image"]', "og:image", "https://apexaccelerator.ca/the-apex-accelerator-site.png");

    setMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "twitter:title", PAGE_TITLE);
    setMeta('meta[name="twitter:description"]', "twitter:description", PAGE_DESC);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Free Apex Accelerator Workshops for Grade 9-10 Students",
      "url": PAGE_URL,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Event",
            "name": "What Top Students Do Differently in High School",
            "startDate": "2026-05-17T14:30:00-04:00",
            "endDate": "2026-05-17T16:00:00-04:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "location": { "@type": "VirtualLocation", "url": PAGE_URL },
            "description": "Free workshop for Grade 9-10 students: discover what top students do differently to build meaningful projects and leadership experiences early in high school.",
            "organizer": { "@type": "Organization", "name": "The Apex Accelerator", "url": "https://apexaccelerator.ca" },
            "isAccessibleForFree": true,
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD", "availability": "https://schema.org/LimitedAvailability", "url": PAGE_URL },
            "audience": { "@type": "EducationalAudience", "audienceType": "Grade 9-10 high school students" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Event",
            "name": "How to Start Meaningful Projects in High School",
            "startDate": "2026-06-13T14:30:00-04:00",
            "endDate": "2026-06-13T16:00:00-04:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "location": { "@type": "VirtualLocation", "url": PAGE_URL },
            "description": "Free virtual workshop for Grade 9-10 students on how to start and build meaningful projects in high school that matter for university applications.",
            "organizer": { "@type": "Organization", "name": "The Apex Accelerator", "url": "https://apexaccelerator.ca" },
            "isAccessibleForFree": true,
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD", "availability": "https://schema.org/LimitedAvailability", "url": PAGE_URL },
            "audience": { "@type": "EducationalAudience", "audienceType": "Grade 9-10 high school students" }
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "workshops-structured-data";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.querySelector("#workshops-structured-data")?.remove();
      setLink("canonical", "https://apexaccelerator.ca/");
      document.title = "The Apex Accelerator | High School Mentorship & University Prep for Grade 9-10 Students";
    };
  }, []);

  const handleRegister = (workshopId: string) => {
    setSelectedWorkshopId(workshopId);
    signupRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative overflow-hidden pb-20 pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,hsl(38_62%_58%_/_0.16),transparent_25%),radial-gradient(circle_at_85%_5%,hsl(40_55%_60%_/_0.12),transparent_22%)]" />
          <div className="container relative mx-auto px-6">
            <div className="mx-auto max-w-5xl text-center">
              <div className="luxe-kicker mb-6 inline-flex">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Free Workshops</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Free Workshops for Ambitious High School Students
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                We host free virtual workshops for Grade 9-10 students who want to start building meaningful
                projects, leadership experiences, and initiatives early in high school.
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-primary">
                Limited seats per session to allow for discussion and Q&amp;A.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#upcoming-workshops" className="btn-luxe-primary gap-2" data-cta="workshops-hero-upcoming">
                  See Upcoming Workshops
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#registration" className="btn-luxe-ghost" data-cta="workshops-hero-register">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="upcoming-workshops" className="bg-background py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 max-w-3xl" data-reveal="up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Upcoming Workshops</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-5xl">Start with the right room</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Each session is designed to give ambitious students practical direction, concrete examples, and a
                clearer sense of what to start building now.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  data-reveal={index % 2 === 0 ? "left" : "right"}
                  style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
                >
                  <WorkshopCard workshop={workshop} onRegister={(selectedWorkshop) => handleRegister(selectedWorkshop.id)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-muted py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 max-w-3xl" data-reveal="up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Why Attend</p>
              <h2 className="mt-3 text-3xl font-bold text-section-foreground md:text-5xl">What students leave with</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];

                return (
                  <div
                    key={benefit}
                    className="luxe-section-card p-6"
                    data-reveal="pop"
                    style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
                  >
                    <div className="inline-flex rounded-2xl bg-primary/15 p-3 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-base leading-7 text-section-foreground">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="registration" ref={signupRef} className="bg-background py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="luxe-panel rounded-[2rem] p-8" data-reveal="left">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Registration</p>
                <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Reserve your seat</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  These sessions are built for ambitious Grade 9-10 students who want to start early, think clearly,
                  and build experiences that matter.
                </p>
                <div className="mt-8 rounded-[1.6rem] border border-primary/15 bg-primary/8 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">Best For</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/85">
                    <li>Students who want more direction than their school environment usually gives them.</li>
                    <li>Students who are curious about projects, leadership, and initiative beyond the classroom.</li>
                    <li>Students who want to start building momentum early instead of waiting until Grade 11 or 12.</li>
                  </ul>
                </div>
              </div>

              <div className="luxe-panel rounded-[2rem] p-8 sm:p-10" data-reveal="right">
                <WorkshopSignupForm
                  selectedWorkshopId={selectedWorkshopId}
                  onWorkshopChange={setSelectedWorkshopId}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
