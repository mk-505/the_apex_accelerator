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
    date: "Thursday, April 9, 2026",
    time: "7:00 PM ET",
  },
  {
    id: "meaningful-projects",
    slug: "how-to-start-meaningful-projects-in-high-school",
    title: "How to Start Meaningful Projects in High School",
    description:
      "A practical workshop on turning your interests into projects, initiatives, and experiences that actually matter.",
    audience: "Grade 9-10 students",
    date: "Tuesday, April 21, 2026",
    time: "7:00 PM ET",
  },
];

export const interestAreas = [
  "STEM / Engineering",
  "Business / Finance",
  "Leadership / Impact",
  "Still Exploring",
] as const;

export type InterestArea = (typeof interestAreas)[number];
