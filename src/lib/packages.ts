// Single source of truth for the Apex lineup. Cards, comparison table, CTA ladder, footer,
// booking page and the Service/Offer structured data all read from here.

export type PackageSlug = 'strategy' | 'momentum' | 'advantage';

export type ApexPackage = {
  slug: PackageSlug;
  name: string;
  price: number;
  paymentPlan?: string;
  tagline: string;
  bestFor?: string;
  summary?: string;
  inheritsFrom?: string;
  features: string[];
  note?: string;
  promise: string;
  cta: string;
  featured?: boolean;
};

export const formatPrice = (price: number) => `$${price.toLocaleString('en-CA')}`;

export const UPGRADE_CREDIT = 'Start with Strategy. If you upgrade within 30 days, your $249 is credited in full.';

export const packages: ApexPackage[] = [
  {
    slug: 'strategy',
    name: 'Apex Strategy',
    price: 249,
    tagline: '“Tell me what to do.”',
    summary:
      'A 2-hour session that turns your profile into a written, step-by-step plan for the next 6–12 months.',
    features: [
      'Pre-session intake questionnaire',
      '2-hour 1-on-1 strategy session',
      'Full profile review: academics, extracurriculars, strengths and gaps',
      'University and program targeting (reach / match / safe list)',
      'Written Apex Roadmap, delivered within 3 business days: habits to fix first, the goal to build around, exactly how to land research, an internship, or a passion project, and what your week should look like',
      'Scholarship shortlist matched to the profile',
      'Full access to the Apex resource library (templates, timelines, scholarship database)',
      'One 30-minute follow-up call within 60 days',
    ],
    promise: 'Know exactly where you stand and what to do next.',
    cta: 'Get My Roadmap',
  },
  {
    slug: 'momentum',
    name: 'Apex Momentum',
    price: 1199,
    paymentPlan: '3 × $400',
    tagline: '“Keep me on track while I do it.”',
    bestFor: 'Grades 9–11 building their profile',
    inheritsFrom: 'Apex Strategy, plus 3 months of coaching',
    features: [
      'Six 45-minute coaching sessions, every two weeks',
      'Milestone tracking against the roadmap',
      'Message support between sessions (replies within 2 business days)',
      'Ongoing community support in Discord',
      'Networking guidance: learn how to reach out to university students, researchers, and industry professionals',
      'Passion project guidance: scoping, planning, progress check-ins',
      'Updated roadmap at the end of 3 months with the next-phase plan',
    ],
    promise: 'A plan only works if you follow it. We make sure you do.',
    cta: 'Start Momentum',
  },
  {
    slug: 'advantage',
    name: 'Apex Advantage',
    price: 2999,
    paymentPlan: '6 × $500',
    tagline: '“Help me actually do it.”',
    bestFor: 'Grades 11–12 heading into applications',
    inheritsFrom: 'Apex Momentum, extended to 6 months, plus',
    features: [
      'Coaching every two weeks for the full 6 months (12 sessions total)',
      'Final school and program list with an application strategy for each',
      'Essay and supplementary application editing',
      'Scholarship application support, including essays and reference strategy',
      'Mock interview prep',
      'Ongoing community support in Discord',
    ],
    note: 'Starting in Grade 11? Your coaching focuses on building your profile first. Application editing and scholarship application support are saved for Grade 12, when application season opens.',
    promise: 'Don’t just know what to do. Get support actually doing it.',
    cta: 'Get Apex Advantage',
    featured: true,
  },
];

export const packageBySlug = (slug: string | null | undefined) => packages.find((pkg) => pkg.slug === slug);
