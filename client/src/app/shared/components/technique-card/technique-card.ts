import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Technique } from '../../../core/models';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button';

@Component({
  selector: 'app-technique-card',
  imports: [RouterLink, FavoriteButtonComponent],
  template: `
    <article class="technique-card card">
      <div class="technique-card__header">
        <span class="badge">{{ technique().category }}</span>
        <app-favorite-button [slug]="technique().slug" />
      </div>
      <h2 class="technique-card__title">
        <a [routerLink]="['/techniques', technique().slug]">{{ technique().name }}</a>
      </h2>
      <p class="technique-card__summary">{{ technique().summary }}</p>
      <div class="technique-card__meta">
        <span class="badge">{{ technique().giMode }}</span>
        <span class="badge">{{ technique().difficulty }}</span>
      </div>
    </article>
  `,
  styles: `
    .technique-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-sm); }
    .technique-card__title { font-size: 1.125rem; margin-bottom: var(--space-sm); }
    .technique-card__title a { color: inherit; text-decoration: none; &:hover { color: var(--color-primary); text-decoration: underline; } }
    .technique-card__summary { font-size: 0.9375rem; color: var(--color-text-muted); margin-bottom: var(--space-md); }
    .technique-card__meta { display: flex; gap: var(--space-sm); }
  `,
})
export class TechniqueCardComponent {
  readonly technique = input.required<Technique>();
}
