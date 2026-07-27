import { Article } from '../../core/models';

export const ARTICLES: Article[] = [
  {
    slug: 'what-is-bjj',
    title: 'What Is Brazilian Jiu-Jitsu?',
    summary: 'An introduction to BJJ — a grappling art focused on leverage, control, and submissions.',
    publishedAt: '2026-07-01',
    sections: [
      {
        heading: 'A Martial Art Built on Leverage',
        paragraphs: [
          'Brazilian Jiu-Jitsu (BJJ) is a grappling-based martial art that emphasizes technique over strength. Practitioners learn to control opponents on the ground using positions, leverage, and submissions such as joint locks and chokes.',
          'Unlike striking arts, BJJ focuses on neutralizing size and strength advantages through proper positioning and timing.',
        ],
      },
      {
        heading: 'Training Format',
        paragraphs: ['A typical class includes:'],
        bullets: [
          'Warm-up and movement drills',
          'Technique instruction from the instructor',
          'Drilling with a partner at controlled intensity',
          'Optional sparring (rolling) for experienced students',
        ],
      },
      {
        heading: 'Who Is It For?',
        paragraphs: [
          'BJJ is practiced by people of all ages and fitness levels. Many beginners start with no prior martial arts experience. The key requirements are patience, consistency, and willingness to learn.',
        ],
      },
    ],
    sources: [
      { label: 'IBJJF — About Jiu-Jitsu', url: 'https://ibjjf.com/', accessedAt: '2026-07-27' },
    ],
  },
  {
    slug: 'your-first-month',
    title: 'Your First Month in BJJ',
    summary: 'Practical advice for new students navigating their first weeks on the mat.',
    publishedAt: '2026-07-15',
    sections: [
      {
        heading: 'What to Expect',
        paragraphs: [
          'Your first month will likely feel overwhelming — and that is normal. You will learn new vocabulary, unfamiliar movements, and social norms specific to your academy.',
          'Focus on showing up consistently rather than trying to master everything at once.',
        ],
      },
      {
        heading: 'Tips for Success',
        bullets: [
          'Ask questions when you do not understand',
          'Tap early and often — your training partners depend on it',
          'Keep nails trimmed and maintain good hygiene',
          'Take notes after class if it helps you remember',
          'Be patient with yourself — everyone was a beginner once',
        ],
        paragraphs: [],
      },
      {
        heading: 'When to Start Rolling',
        paragraphs: [
          'Many academies let beginners observe or participate in light rolling after a few classes. Follow your instructor\'s guidance. There is no rush — building a foundation of movement first often leads to better long-term progress.',
        ],
      },
    ],
    sources: [
      { label: 'Gracie Academy beginner resources', accessedAt: '2026-07-27' },
    ],
  },
];
