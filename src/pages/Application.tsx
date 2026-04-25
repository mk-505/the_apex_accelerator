import { useEffect } from "react";
import { ApexApplicationForm } from "@/components/application/ApexApplicationForm";

const Application = () => {
  useEffect(() => {
    const PAGE_URL = "https://apexaccelerator.ca/application";
    const PAGE_TITLE = "Apply to The Apex Accelerator | High School Mentorship Program";
    const PAGE_DESC =
      "Apply to join The Apex Accelerator — Canada's selective high school mentorship program for ambitious Grade 9-10 students. Limited spots. Applications reviewed on a rolling basis.";

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

    return () => {
      setLink("canonical", "https://apexaccelerator.ca/");
      document.title = "The Apex Accelerator | High School Mentorship & University Prep for Grade 9-10 Students";
    };
  }, []);

  return <ApexApplicationForm />;
};

export default Application;
