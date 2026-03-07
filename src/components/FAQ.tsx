import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is The Apex Accelerator for?',
    answer: 'We work with ambitious high school students targeting competitive programs. Whether you\'re aiming for engineering, business, medicine, or another selective path, we can help you stand out.',
  },
  {
    question: 'When should I start working with you?',
    answer: 'Ideally, students should start in Grade 10 or 11 to have time to build a compelling profile. If you start in Grade 10, for the applications phase of the program you\'ll take a gap year and rejoin during that phase.',
  },
  {
    question: 'How is Apex different from traditional admissions consulting?',
    answer: 'Most admissions consultants focus only on applications during Grade 12. Apex focuses on the development that happens before the application. Students explore interests, build projects, develop leadership experiences, and grow their personal brand so that by the time applications begin, they already have a strong and authentic story to tell.',
  },
  {
    question: 'What does the program cost?',
    answer: 'Our pricing varies based on the level of support you need and how long we\'ll be working together. We offer different packages from application review to comprehensive mentorship. Contact us for a personalized quote.',
  },
  {
    question: 'What does the time commitment look like?',
    answer: 'Students participate in regular workshops, mentorship sessions, and project work. Workshops are done primarily on weekends, we teach students how to balance their time and recognize that they are able to fit more into their days. Your results as student will depend on how much effort and time you choose to put in. The program is designed to fit alongside school commitments while still encouraging meaningful progress (e.g. less intense session load during exams).',
  },
  {
    question: 'Do students need to know what they want to study before joining?',
    answer: 'Not at all. In fact, many students join Apex because they are still exploring their interests. A key part of the program involves exploring different fields, developing ideas, and gradually identifying areas students want to pursue more deeply.',
  },
  {
    question: 'What types of projects do students build?',
    answer: 'Projects vary depending on student interests. These may include research projects, startups, community initiatives, technical builds, competitions, or leadership programs. The goal is to create meaningful experiences that reflect a student\'s genuine interests and initiative.',
  },
  {
    question: 'Do you guarantee university admissions?',
    answer: 'No program can guarantee admissions outcomes. What Apex guarantees is the development process — helping students build stronger profiles, clearer direction, and more compelling applications through structured mentorship and project-building.',
  },
  {
    question: 'How selective is the program?',
    answer: 'Students are admitted through a written application and interview process. This allows us to build cohorts of students who are motivated, curious, and excited to challenge themselves alongside like-minded peers.',
  },
  {
    question: 'Can parents be involved in the process?',
    answer: 'Yes. Parents will be kept involved throughout the entire process, receiving email updates on their kid\'s application. Parents are always welcome to reach out to us over email or even book a call with us for any questions, or concerns.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-section-muted">
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
                className="luxe-section-card rounded-xl px-6"
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

          <p
            id="contact"
            className="mt-8 text-center text-section-muted-foreground text-base"
          >
            If you have any questions, please feel free to reach out to us at{' '}
            <a
              href="mailto:contact@apexaccelerator.ca"
              className="font-semibold text-primary hover:opacity-85 transition-opacity"
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
