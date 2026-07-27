import { RenderMode, ServerRoute } from '@angular/ssr';
import { TECHNIQUES } from './data/techniques/techniques.data';
import { POSITIONS } from './data/positions/positions.data';
import { ARTICLES } from './data/articles/articles.data';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'history', renderMode: RenderMode.Prerender },
  { path: 'gi-vs-no-gi', renderMode: RenderMode.Prerender },
  { path: 'belts', renderMode: RenderMode.Prerender },
  { path: 'benefits', renderMode: RenderMode.Prerender },
  { path: 'beginner-guide', renderMode: RenderMode.Prerender },
  { path: 'rules', renderMode: RenderMode.Prerender },
  { path: 'glossary', renderMode: RenderMode.Prerender },
  { path: 'techniques', renderMode: RenderMode.Prerender },
  {
    path: 'techniques/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return TECHNIQUES.map((t) => ({ slug: t.slug }));
    },
  },
  { path: 'positions', renderMode: RenderMode.Prerender },
  {
    path: 'positions/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return POSITIONS.map((p) => ({ slug: p.slug }));
    },
  },
  { path: 'articles', renderMode: RenderMode.Prerender },
  {
    path: 'articles/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return ARTICLES.map((a) => ({ slug: a.slug }));
    },
  },
  { path: 'learning-path', renderMode: RenderMode.Prerender },
  { path: 'quiz', renderMode: RenderMode.Prerender },
  { path: 'favorites', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: '404', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
