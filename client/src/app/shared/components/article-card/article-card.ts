import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../core/models';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink],
  template: `
    <article class="card article-card">
      <h2 class="article-card__title">
        <a [routerLink]="['/articles', article().slug]">{{ article().title }}</a>
      </h2>
      <p>{{ article().summary }}</p>
      <time class="article-card__date" [attr.datetime]="article().publishedAt">
        {{ article().publishedAt }}
      </time>
    </article>
  `,
  styles: `
    .article-card__title { font-size: 1.125rem; margin-bottom: var(--space-sm); }
    .article-card__title a { color: inherit; text-decoration: none; &:hover { color: var(--color-primary); } }
    .article-card__date { font-size: 0.8125rem; color: var(--color-text-subtle); }
  `,
})
export class ArticleCardComponent {
  readonly article = input.required<Article>();
}
