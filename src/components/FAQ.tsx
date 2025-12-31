import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is The Apex Accelerator for?',
    answer: 'We work with ambitious high school students who are targeting top universities in Canada and the US. Whether you\'re aiming for engineering, business, medicine, or any other competitive program, we can help you stand out.',
  },
  {
    question: 'When should I start working with you?',
    answer: 'Ideally, students should start in Grade 10 or 11 to have time to build a compelling profile. However, we also work with Grade 12 students during application season to maximize their chances with their current profile.',
  },
  {
    question: 'How is The Apex Accelerator different from other consulting services?',
    answer: 'We\'re recent students ourselves who just went through the exact process you\'re facing. We understand the current landscape, what admissions officers are looking for, and can relate to the challenges you\'re experiencing. Plus, we offer a money-back guarantee if you don\'t get into your top 3 schools.',
  },
  {
    question: 'What does the program cost?',
    answer: 'Our pricing varies based on the level of support you need and how long we\'ll be working together. We offer different packages from application review to comprehensive mentorship. Contact us for a personalized quote.',
  },
  {
    question: 'How does the money-back guarantee work?',
    answer: 'If you complete our program and don\'t get accepted to any of your top 3 universities, we\'ll refund your full program fee. We\'re that confident in our approach and your potential.',
  },
  {
    question: 'How much time commitment is required?',
    answer: 'This depends on where you are in your journey. Generally, expect 1-2 hours per week for mentorship sessions, plus time for implementing our recommendations and working on applications.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-section-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-section-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-section-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about The <span className="text-primary font-semibold">Apex</span> Accelerator
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-section-card border border-section-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-section-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-section-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
