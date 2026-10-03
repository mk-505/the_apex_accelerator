import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is Apex for?',
    answer:
      'Ambitious high school students preparing for university admissions, scholarships, or both. Parents are welcome throughout, but the work is built around the student.',
  },
  {
    question: 'What grade should I be in?',
    answer:
      'There is no single ideal grade. We work with students early in high school who want to build strategically, students heading into Grade 12 who need application strategy, and students actively applying. The right package depends on how far along you are.',
  },
  {
    question: 'Do I need to know what university I want to attend?',
    answer:
      'No. Apex can help you clarify your direction and determine what to prioritize. Plenty of students come in undecided, and narrowing that down is part of the assessment and positioning work.',
  },
  {
    question: 'Is this tutoring?',
    answer:
      'No. Apex focuses on application strategy, positioning, planning, and execution rather than subject tutoring. We don’t teach course content or prepare you for school tests.',
  },
  {
    question: 'Do you write my essays for me?',
    answer:
      'No. Apex helps students develop and communicate their own ideas, and provides feedback and editing support where it is included in the package. The writing stays yours.',
  },
  {
    question: 'Do you guarantee admission or scholarships?',
    answer:
      'No. Admissions and scholarships are ultimately determined by universities and scholarship organizations. Apex provides strategy, preparation, resources, and feedback, not outcomes.',
  },
  {
    question: 'What’s included in application editing?',
    answer:
      'Application editing is part of Apex Advantage ($549 CAD). It covers edits and personalized feedback on your applications and essays, plus guidance through the application process. Editing follows a defined scope: the specific documents and number of revision rounds are confirmed in writing during purchase and onboarding. It is not an unlimited-edits service.',
  },
  {
    question: 'What’s included in the scholarship database?',
    answer:
      'A curated resource intended to help you identify scholarships that are actually relevant to your profile, program interests, and timeline, so you spend your applications on opportunities worth applying to. It is included with Apex Toolkit and Apex Advantage.',
  },
  {
    question: 'Can parents be involved?',
    answer:
      'Yes. Parents can join calls, ask questions, and stay informed where appropriate. The student stays at the centre of the process, since the plan only works if they own it.',
  },
  {
    question: 'Which package should I choose?',
    answer:
      'Apex Strategy ($199 CAD) is best for students who want a clear plan. Apex Toolkit ($339 CAD) is best for students who want the plan plus the resources to execute independently. Apex Advantage ($549 CAD) is best for students who want hands-on application support. If you’re unsure, book a free 15-minute call and we’ll tell you where to start.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative border-t border-primary/10 bg-section py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center" data-reveal="up">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-heading mt-5">
            Questions, answered <span className="text-primary">straight.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="luxe-section-card rounded-xl border-b px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p id="contact" className="mt-8 text-center text-sm text-muted-foreground">
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
