export type TechniqueCategory =
  | 'escape'
  | 'sweep'
  | 'guard-pass'
  | 'submission'
  | 'takedown'
  | 'fundamental';

export type GiMode = 'gi' | 'no-gi' | 'both';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type BeltLevel = 'white' | 'blue' | 'purple' | 'brown' | 'black';

export interface Source {
  label: string;
  url?: string;
  accessedAt?: string;
  notes?: string;
}

export interface TechniqueStep {
  order: number;
  title: string;
  description: string;
  imageAlt?: string;
  imageSrc?: string;
}

export interface TechniqueMedia {
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
}

export interface Technique {
  id: string;
  name: string;
  slug: string;
  summary: string;
  startingPositionSlug: string;
  category: TechniqueCategory;
  giMode: GiMode;
  difficulty: Difficulty;
  recommendedBelts: BeltLevel[];
  steps: TechniqueStep[];
  commonMistakes: string[];
  safetyNotes: string[];
  relatedTechniqueSlugs: string[];
  media?: TechniqueMedia;
  sources: Source[];
  lastReviewedAt: string;
}

export interface PositionHotspot {
  positionSlug: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Position {
  slug: string;
  name: string;
  summary: string;
  category: 'top' | 'bottom' | 'neutral' | 'standing';
  description: string;
  keyObjectives: string[];
  relatedTechniqueSlugs: string[];
  diagramHotspots?: PositionHotspot[];
  sources: Source[];
}

export interface Belt {
  level: BeltLevel;
  slug: string;
  name: string;
  colorHex: string;
  summary: string;
  typicalFocus: string[];
  generalExpectations: string[];
  disclaimer: string;
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  sections: ArticleSection[];
  sources: Source[];
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  expandedExplanation?: string;
  relatedTerms?: string[];
  alsoKnownAs?: string[];
}

export interface QuizChoice {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: QuizChoice[];
  correctChoiceId: string;
  explanation: string;
  topic: 'rules' | 'positions' | 'terminology' | 'safety';
}

export interface LearningPathItem {
  id: string;
  order: number;
  title: string;
  description: string;
  linkType: 'technique' | 'article' | 'page';
  linkTarget: string;
}

export interface TechniqueFilters {
  query: string;
  categories: TechniqueCategory[];
  giMode: GiMode | 'all';
  positions: string[];
  belts: BeltLevel[];
  difficulty: Difficulty | 'all';
}

export type TechniqueSort = 'name-asc' | 'name-desc' | 'difficulty';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  topic: string;
  gi: string;
  noGi: string;
}

export interface BenefitCategory {
  title: string;
  items: string[];
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const DEFAULT_TECHNIQUE_FILTERS: TechniqueFilters = {
  query: '',
  categories: [],
  giMode: 'all',
  positions: [],
  belts: [],
  difficulty: 'all',
};
