import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookOpen, UserCheck, Sparkles } from "lucide-react";

const callPoints = [
  {
    icon: BookOpen,
    title: "Learn about the program",
    description:
      "We'll walk you through exactly how The Apex Accelerator works — what the mentorship looks like, what students build, and what outcomes to expect.",
  },
  {
    icon: UserCheck,
    title: "See how it's personalized to you",
    description:
      "No two students follow the same path. We'll talk through your interests, goals, and where you're at so you can understand how we'd tailor the program specifically for you.",
  },
  {
    icon: Sparkles,
    title: "Find out if it's the right fit",
    description:
      "We're selective about who we work with — and so should you be. This call is a chance for both sides to make sure we're genuinely aligned before any commitment.",
  },
];

const DiscoveryCall = () => {
  useEffect(() => {
    const PAGE_URL = "https://apexaccelerator.ca/discovery-call";
    const PAGE_TITLE = "Book a Free Discovery Call | The Apex Accelerator";
    const PAGE_DESC =
      "Book a free discovery call with The Apex Accelerator. We'll learn about your goals and see if our high school mentorship program is the right fit for you.";

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
      document.title = "The Apex Accelerator | High School Mentorship & University Prep for Grade 9-10 Students";
      document.getElementById("calendly-script")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-8 container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="luxe-kicker mb-6 animate-fade-in justify-center">
            <span>Free · No Pressure · 30 Minutes</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Book a <span className="text-primary">Discovery Call</span>
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up [animation-delay:120ms]">
            A quick 30-minute conversation — no prep needed, no commitment required.
          </p>
        </div>
      </section>

      <section className="pb-12 container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 animate-slide-up [animation-delay:200ms]">
          {callPoints.map((point) => (
            <div key={point.title} className="luxe-panel px-6 py-6">
              <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 container mx-auto px-6">
        <div
          className="calendly-inline-widget max-w-4xl mx-auto rounded-2xl border border-primary/20 overflow-hidden shadow-lg animate-slide-up [animation-delay:320ms]"
          data-url="https://calendly.com/theapexaccelerator/apex-discovery-call"
          style={{ minWidth: "320px", height: "1050px" }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default DiscoveryCall;
