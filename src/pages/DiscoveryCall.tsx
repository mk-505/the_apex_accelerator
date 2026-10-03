import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Compass, ListChecks, HandHeart } from "lucide-react";

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

const packageDetails: Record<string, { name: string; price: string; promise: string }> = {
  strategy: {
    name: "Apex Strategy",
    price: "$199 CAD",
    promise: "Know where you stand and exactly what to do next.",
  },
  toolkit: {
    name: "Apex Toolkit",
    price: "$339 CAD",
    promise: "Leave with the strategy and the tools to execute it yourself.",
  },
  advantage: {
    name: "Apex Advantage",
    price: "$549 CAD",
    promise: "Don't just know what to do. Get support actually doing it.",
  },
};

const DiscoveryCall = () => {
  const location = useLocation();
  const selectedPackage = useMemo(() => {
    const slug = new URLSearchParams(location.search).get("package");
    return slug ? packageDetails[slug] : undefined;
  }, [location.search]);

  useEffect(() => {
    const PAGE_URL = "https://apexaccelerator.ca/discovery-call";
    const PAGE_TITLE = "Book a Free Call | Apex Accelerator University Application Strategy";
    const PAGE_DESC =
      "Book a free 15-minute call with The Apex Accelerator. Tell us where you're at with university and scholarship applications, and we'll tell you which package fits, or if we're not the right help.";

    document.title = PAGE_TITLE;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith("meta[name")) el.setAttribute("name", attr);
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
    setMeta('meta[name="robots"]', "robots", "index, follow");
    setLink("canonical", PAGE_URL);

    setMeta('meta[property="og:type"]', "og:type", "website");
    setMeta('meta[property="og:url"]', "og:url", PAGE_URL);
    setMeta('meta[property="og:title"]', "og:title", PAGE_TITLE);
    setMeta('meta[property="og:description"]', "og:description", PAGE_DESC);
    setMeta('meta[property="og:image"]', "og:image", "https://apexaccelerator.ca/the-apex-accelerator-site.png");

    setMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "twitter:title", PAGE_TITLE);
    setMeta('meta[name="twitter:description"]', "twitter:description", PAGE_DESC);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.id = "calendly-script";
    document.head.appendChild(script);

    return () => {
      setLink("canonical", "https://apexaccelerator.ca/");
      document.title = "Apex Accelerator | University & Scholarship Application Strategy";
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
              <span className="text-sm font-semibold text-primary">{selectedPackage.price}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{selectedPackage.promise}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mention {selectedPackage.name} when you book and we&apos;ll confirm it fits before anything is paid.
              Prefer to skip the call? Email{" "}
              <a
                href={`mailto:contact@apexaccelerator.ca?subject=${encodeURIComponent(
                  `${selectedPackage.name} (${selectedPackage.price})`,
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
