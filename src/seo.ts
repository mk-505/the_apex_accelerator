// Per-page <head> values. scripts/prerender.mjs writes these into each pre-rendered HTML file,
// so crawlers and AI tools see the right title and description without running JavaScript.

export type PageMeta = {
  path: string;
  file: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
};

const SITE = 'https://apexaccelerator.ca';
const INDEX = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

export const pages: PageMeta[] = [
  {
    path: '/',
    file: 'index.html',
    title: 'University & Scholarship Application Strategy | Apex Accelerator',
    description:
      'University and scholarship application strategy for Canadian high school students in Grades 9–12. Get a written, step-by-step roadmap from $249 CAD, plus optional coaching and essay support.',
    canonical: `${SITE}/`,
    robots: INDEX,
  },
  {
    path: '/discovery-call',
    file: 'discovery-call.html',
    title: 'Book a Free 15-Minute Call | Apex Accelerator',
    description:
      'Book a free 15-minute call with Apex Accelerator. Tell us where you are with university and scholarship applications and we’ll tell you which package fits, or if we’re not the right help.',
    canonical: `${SITE}/discovery-call`,
    robots: INDEX,
  },
  {
    path: '/404',
    file: '404.html',
    title: 'Page Not Found | Apex Accelerator',
    description: 'This page does not exist. Visit apexaccelerator.ca for university and scholarship application strategy.',
    canonical: `${SITE}/`,
    robots: 'noindex, follow',
  },
];
