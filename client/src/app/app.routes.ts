import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
      },
      {
        path: 'history',
        loadComponent: () => import('./features/history/history').then((m) => m.HistoryComponent),
      },
      {
        path: 'techniques',
        loadComponent: () =>
          import('./features/techniques/technique-list/technique-list').then((m) => m.TechniqueListComponent),
      },
      {
        path: 'techniques/:slug',
        loadComponent: () =>
          import('./features/techniques/technique-detail/technique-detail').then((m) => m.TechniqueDetailComponent),
      },
      {
        path: 'positions',
        loadComponent: () =>
          import('./features/positions/position-explorer/position-explorer').then((m) => m.PositionExplorerComponent),
      },
      {
        path: 'positions/:slug',
        loadComponent: () =>
          import('./features/positions/position-detail/position-detail').then((m) => m.PositionDetailComponent),
      },
      {
        path: 'gi-vs-no-gi',
        loadComponent: () => import('./features/gi-vs-no-gi/gi-vs-no-gi').then((m) => m.GiVsNoGiComponent),
      },
      {
        path: 'belts',
        loadComponent: () => import('./features/belts/belts').then((m) => m.BeltsComponent),
      },
      {
        path: 'benefits',
        loadComponent: () => import('./features/benefits/benefits').then((m) => m.BenefitsComponent),
      },
      {
        path: 'beginner-guide',
        loadComponent: () =>
          import('./features/beginner-guide/beginner-guide').then((m) => m.BeginnerGuideComponent),
      },
      {
        path: 'glossary',
        loadComponent: () => import('./features/glossary/glossary').then((m) => m.GlossaryComponent),
      },
      {
        path: 'rules',
        loadComponent: () => import('./features/rules/rules').then((m) => m.RulesComponent),
      },
      {
        path: 'articles',
        loadComponent: () =>
          import('./features/articles/article-list/article-list').then((m) => m.ArticleListComponent),
      },
      {
        path: 'articles/:slug',
        loadComponent: () =>
          import('./features/articles/article-detail/article-detail').then((m) => m.ArticleDetailComponent),
      },
      {
        path: 'favorites',
        loadComponent: () => import('./features/favorites/favorites').then((m) => m.FavoritesComponent),
      },
      {
        path: 'learning-path',
        loadComponent: () =>
          import('./features/learning-path/learning-path').then((m) => m.LearningPathComponent),
      },
      {
        path: 'quiz',
        loadComponent: () => import('./features/quiz/quiz').then((m) => m.QuizComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.AboutComponent),
      },
      {
        path: '404',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
      },
      {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
      },
    ],
  },
];
