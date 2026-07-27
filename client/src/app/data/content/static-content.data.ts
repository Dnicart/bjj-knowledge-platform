import { BenefitCategory, ComparisonRow, ContentSection, TimelineEvent } from '../../core/models';

export const HISTORY_TIMELINE: TimelineEvent[] = [
  { year: 'c. 1910s', title: 'Mitsuyo Maeda in Brazil', description: 'Japanese judoka Mitsuyo Maeda teaches Carlos Gracie and others, introducing groundwork-focused techniques to Brazil.' },
  { year: '1925', title: 'Gracie Academy Founded', description: 'Carlos and Hélio Gracie open their academy in Rio de Janeiro, refining techniques for smaller practitioners.' },
  { year: '1990s', title: 'BJJ Goes Global', description: 'The Ultimate Fighting Championship (UFC) showcases BJJ\'s effectiveness, sparking worldwide interest.' },
  { year: '2000s–present', title: 'Sport and Competition Growth', description: 'Organizations like IBJJF expand international competition. No-gi formats grow through ADCC and submission grappling events.' },
];

export const HISTORY_SOURCES = [
  { label: 'Gracie Magazine historical archives', accessedAt: '2026-07-27' },
  { label: 'IBJJF history overview', url: 'https://ibjjf.com/', accessedAt: '2026-07-27' },
];

export const GI_VS_NO_GI_ROWS: ComparisonRow[] = [
  { topic: 'Uniform', gi: 'Kimono (jacket and pants) with belt', noGi: 'Rash guard and shorts or spats' },
  { topic: 'Grips', gi: 'Extensive use of collar, sleeves, and pants grips', noGi: 'Wrist, neck, and body control without fabric grips' },
  { topic: 'Pace', gi: 'Often slower, more methodical due to grip fighting', noGi: 'Typically faster with fewer grip stalling opportunities' },
  { topic: 'Techniques', gi: 'Collar chokes, lapel guards, and gi-specific sweeps', noGi: 'Leg locks, wrestling-style takedowns, and clinch work' },
  { topic: 'Competition', gi: 'IBJJF and similar federations', noGi: 'ADCC, submission grappling, and no-gi IBJJF rulesets' },
  { topic: 'Best for beginners?', gi: 'Both are valid — many academies teach gi first', noGi: 'Both are valid — check what your local academy offers' },
];

export const BENEFIT_CATEGORIES: BenefitCategory[] = [
  {
    title: 'Physical',
    items: [
      'May improve cardiovascular fitness through regular training',
      'Many practitioners report increased flexibility and mobility over time',
      'Can contribute to overall strength and body awareness',
      'Provides a full-body workout in most classes',
    ],
  },
  {
    title: 'Mental',
    items: [
      'Problem-solving under pressure is a core part of rolling',
      'Many students describe improved focus and stress relief',
      'Learning to stay calm in uncomfortable positions may build resilience',
      'Goal-setting through belt progression can support motivation',
    ],
  },
  {
    title: 'Social',
    items: [
      'Training partners often become a close-knit community',
      'Respect and humility are emphasized in most academies',
      'Partner-based learning encourages communication and trust',
      'Academies often host open mats and social events',
    ],
  },
];

export const BEGINNER_GUIDE_SECTIONS: ContentSection[] = [
  {
    heading: 'Before Your First Class',
    paragraphs: ['Most academies welcome beginners with no experience. Wear comfortable athletic clothing if you do not have a gi yet.'],
    bullets: [
      'Arrive 10–15 minutes early to sign waivers and meet the instructor',
      'Trim fingernails and toenails',
      'Remove jewelry and piercings that could cause injury',
      'Bring water and a positive attitude',
    ],
  },
  {
    heading: 'Hygiene',
    paragraphs: ['Good hygiene protects you and your training partners.'],
    bullets: [
      'Shower before class and wear clean gear',
      'Wash your gi after every use',
      'Cover any open cuts or wounds',
      'Stay home if you have a contagious illness or skin infection',
    ],
  },
  {
    heading: 'Etiquette',
    bullets: [
      'Bow or acknowledge when entering and leaving the mat',
      'Listen when the instructor is teaching',
      'Do not coach others unless asked',
      'Be respectful to all training partners regardless of size or rank',
      'Line up by rank when directed',
    ],
    paragraphs: [],
  },
  {
    heading: 'Tapping and Safety',
    paragraphs: [
      'Tapping is how you signal submission. Tap your partner\'s body or the mat firmly and immediately when caught in a submission or when you feel pain.',
      'Your partner must release the hold as soon as you tap. Never hold a submission after a tap.',
      'If you are unsure whether something is safe, ask your instructor before attempting it.',
    ],
  },
];

export const RULES_DATA = {
  ruleset: 'IBJJF',
  reviewedAt: '2026-07-27',
  scoring: [
    { action: 'Takedown (with control)', points: 2 },
    { action: 'Sweep (reversal from guard)', points: 2 },
    { action: 'Knee on belly', points: 2 },
    { action: 'Guard pass', points: 3 },
    { action: 'Mount', points: 4 },
    { action: 'Back control (both hooks)', points: 4 },
  ],
  legalSubmissions: {
    whiteBelt: ['Armbar', 'Triangle', 'Kimura', 'Americana', 'Rear-naked choke', 'Guillotine (varies)'],
    note: 'Legal submissions vary by belt level and organization. Always verify with current IBJJF rules.',
  },
  sources: [
    { label: 'IBJJF Official Rules', url: 'https://ibjjf.com/rules', accessedAt: '2026-07-27' },
  ],
};
