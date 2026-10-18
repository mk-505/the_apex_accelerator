import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who is Apex for?',
    answer:
      'Ambitious Canadian high school students in Grades 9–12 who are aiming for competitive university programs, major scholarships, or both. Parents usually book, and are involved throughout, but the plan is built around the student, because it only works if they own it.',
  },
  {
    question: 'What grade should I be in?',
    answer:
      'Any grade from 9 to 12 works. The plan just changes. In Grades 9–10 we focus on habits, direction and small first projects. Grade 11 is the key profile-building year, so we focus on your theme, your big moves and your summer. In Grade 12 we focus on applications, essays, scholarship deadlines and interviews.',
  },
  {
    question: 'Is it too late if I’m already in Grade 12?',
    answer:
      'No. Grade 12 sessions spend less time on exploring and more on what’s still ahead: your final school list, essays, scholarship deadlines and interview prep. Apex Advantage is built for this stage. If your deadlines are close, book a free call and we’ll tell you honestly what is still realistic.',
  },
  {
    question: 'What exactly do I get from Apex Strategy?',
    answer:
      'A short intake questionnaire, a 2-hour 1-on-1 session, and a written Apex Roadmap delivered within 3 business days. The roadmap comes as a PDF summary, a Notion workspace you own, and a recorded video walkthrough. It covers your reach / match / safe list, the habits to fix, step-by-step plans for research, internships or a passion project, your weekly schedule, a scholarship shortlist and a dated 30-day checklist. You also get the Apex resource library and a 30-minute follow-up call within 60 days.',
  },
  {
    question: 'How does the upgrade credit work?',
    answer:
      'Start with Apex Strategy. If you upgrade to Apex Momentum or Apex Advantage within 30 days, the full $249 is credited toward your new package.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes. Apex Momentum is $1,199 CAD, or 3 monthly payments of $400. Apex Advantage is $2,999 CAD, or 6 monthly payments of $500. Apex Strategy is a single payment of $249 CAD.',
  },
  {
    question: 'How does essay and application editing work?',
    answer:
      'Editing is part of Apex Advantage. It covers your essays and supplementary applications, plus support with your scholarship applications, including essays and reference strategy. You write, and we give feedback and edits.',
  },
  {
    question: 'Do you write my essays for me?',
    answer:
      'No. You write; we help you find the right story and give detailed feedback and edits where your package includes it. The writing stays yours.',
  },
  {
    question: 'Is this tutoring?',
    answer:
      'No. Apex focuses on application strategy, planning and execution: what to do, in what order, and how to present it. We don’t teach course content or prepare you for school tests.',
  },
  {
    question: 'Do I need to know what university or program I want?',
    answer:
      'No. “No idea yet” is a perfectly good answer on the intake form. Narrowing down a direction and a target list is part of the session.',
  },
  {
    question: 'Can parents be involved?',
    answer:
      'Yes. Parents fill in their own short section of the intake form, join the first 10 and last 15 minutes of the strategy session, and get the PDF summary of the roadmap. The student has the middle of the session on their own, because students tend to be more open that way.',
  },
  {
    question: 'Do you guarantee admission or scholarships?',
    answer:
      'No. Admissions and scholarship decisions are made by universities and scholarship organizations. Apex provides a clear plan, preparation, feedback and accountability.',
  },
  {
    question: 'Which package should I choose?',
    answer:
      'Apex Strategy ($249) if you want a clear written plan and are confident following it yourself. Apex Momentum ($1,199) if you are in Grades 9–11 and want coaching and accountability while you build your profile. Apex Advantage ($2,999) if you are in Grades 11–12 and want hands-on help with applications, essays, scholarships and interviews. Not sure? Book a free 15-minute call.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const FAQ = () => {
  return (
    <section id="faq" className="relative border-t border-primary/10 bg-background py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading mt-5">
            Questions, answered <span className="text-primary">straight.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="luxe-section-card group rounded-xl px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                <h3 className="text-base">{faq.question}</h3>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}

          <p id="contact" className="pt-5 text-center text-sm text-muted-foreground">
            Still have a question? Email us at{' '}
            <a
              href="mailto:contact@apexaccelerator.ca"
              className="font-semibold text-primary transition-opacity hover:opacity-85"
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
