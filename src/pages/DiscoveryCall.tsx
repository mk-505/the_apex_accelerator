import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Compass, ListChecks, HandHeart } from "lucide-react";
import { formatPrice, packageBySlug, type ApexPackage } from "@/lib/packages";

const callPoints = [
  {
    icon: Compass,
    title: "Where you're at",
    description:
      "Grades, extracurriculars, projects, interests, target programs: whatever you've got so far. No prep, no polished pitch needed.",
  },
  {
    icon: ListChecks,
    title: "What you're trying to figure out",
    description:
      "Positioning, scholarships, what to prioritize next, how to approach application season. We'll tell you how we'd approach it.",
  },
  {
    icon: HandHeart,
    title: "Whether Apex can actually help",
    description:
      "If a package makes sense, we'll say which one and why. If it doesn't, we'll say that too, and point you somewhere more useful.",
  },
];

const DiscoveryCall = () => {
  const location = useLocation();
  // Read the query string after mount so the pre-rendered HTML (which has no query) hydrates cleanly.
  const [selectedPackage, setSelectedPackage] = useState<ApexPackage | undefined>();

  useEffect(() => {
    setSelectedPackage(packageBySlug(new URLSearchParams(location.search).get("package")));
  }, [location.search]);

  useEffect(() => {
    const handleCalendlyMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://calendly.com" &&
        typeof event.data === "object" &&
        event.data?.event === "calendly.event_scheduled"
      ) {
        (window as Window & { fbq?: (...args: string[]) => void }).fbq?.("track", "Schedule");
      }
    };

    window.addEventListener("message", handleCalendlyMessage);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.id = "calendly-script";
    document.head.appendChild(script);

    return () => {
      window.removeEventListener("message", handleCalendlyMessage);
      document.getElementById("calendly-script")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="container mx-auto px-6 pt-32 pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="luxe-kicker mb-6 justify-center">
            <span>Free · 15 Minutes · No Prep</span>
          </div>
          <h1 className="text-4xl font-bold tracking-[-0.03em] text-foreground md:text-5xl">
            Book a <span className="text-primary">free call</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            15 minutes. No preparation required. Just tell us where you&apos;re at, where you want to go, and what
            you&apos;re trying to figure out.
          </p>
        </div>
      </section>

      {selectedPackage && (
        <section className="container mx-auto px-6 pb-4">
          <div className="luxe-panel mx-auto max-w-2xl px-6 py-5 text-left">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">You selected</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-xl font-bold text-foreground">{selectedPackage.name}</span>
              <span className="text-sm font-semibold text-primary">{formatPrice(selectedPackage.price)} CAD</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{selectedPackage.promise}</p>
            {selectedPackage.paymentPlan && (
              <p className="mt-1 text-xs text-muted-foreground">Payment plan available: {selectedPackage.paymentPlan}</p>
            )}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mention {selectedPackage.name} when you book and we&apos;ll confirm it fits before anything is paid.
              Prefer to skip the call? Email{" "}
              <a
                href={`mailto:contact@apexaccelerator.ca?subject=${encodeURIComponent(
                  `${selectedPackage.name} (${formatPrice(selectedPackage.price)} CAD)`,
                )}`}
                className="font-semibold text-primary hover:underline"
              >
                contact@apexaccelerator.ca
              </a>{" "}
              and we&apos;ll send payment and onboarding details directly.
            </p>
          </div>
        </section>
      )}

      <section className="container mx-auto px-6 pb-12 pt-6">
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-3">
          {callPoints.map((point) => (
            <div key={point.title} className="luxe-panel px-6 py-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <point.icon className="h-4 w-4 text-primary" />
              </div>
              <h2 className="font-bold text-foreground">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          This is a fit conversation, not a sales call. Pricing is on the{" "}
          <a href="/#packages" className="font-semibold text-primary hover:underline">
            packages section
          </a>
          , so you don&apos;t need to talk to us to see it.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div
          className="calendly-inline-widget mx-auto max-w-4xl overflow-hidden rounded-2xl border border-primary/20 shadow-lg"
          data-url="https://calendly.com/theapexaccelerator/apex-discovery-call"
          style={{ minWidth: "320px", height: "1050px" }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default DiscoveryCall;
