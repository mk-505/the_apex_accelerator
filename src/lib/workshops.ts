export type Workshop = {
  id: string;
  title: string;
  description: string;
  audience: string;
  date: string;
  time: string;
  slug: string;
};

export const workshops: Workshop[] = [
  {
    id: "top-students-high-school",
    slug: "what-top-students-do-differently-in-high-school",
    title: "What Top Students Do Differently in High School",
    description:
      "A session on how ambitious students start building standout experiences early through projects, leadership, and initiative.",
    audience: "Grade 9-10 students",
    date: "Saturday, April 25, 2026",
    time: "2:30 PM ET",
  },
  {
    id: "meaningful-projects",
    slug: "how-to-start-meaningful-projects-in-high-school",
    title: "How to Start Meaningful Projects in High School",
    description:
      "A practical workshop on turning your interests into projects, initiatives, and experiences that actually matter.",
    audience: "Grade 9-10 students",
    date: "Sunday, May 17, 2026",
    time: "2:30 PM ET",
  },
];

export const interestAreas = [
  "STEM / Engineering",
  "Business / Finance",
  "Leadership / Impact",
  "Still Exploring",
] as const;

export type InterestArea = (typeof interestAreas)[number];
