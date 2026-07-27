import { Component, input } from '@angular/core';
import { Source } from '../../../core/models';

@Component({
  selector: 'app-citation-list',
  template: `
    @if (sources().length) {
      <section class="citations" [attr.aria-label]="label()">
        <h2 class="citations__title">{{ label() }}</h2>
        <ul>
          @for (source of sources(); track source.label) {
            <li>
              @if (source.url) {
                <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{ source.label }}</a>
              } @else {
                {{ source.label }}
              }
              @if (source.accessedAt) {
                <span class="citations__date"> (accessed {{ source.accessedAt }})</span>
              }
            </li>
          }
        </ul>
      </section>
    }
  `,
  styles: `
    .citations {
      margin-top: var(--space-xl);
      padding-top: var(--space-lg);
      border-top: 1px solid var(--color-border);
      font-size: 0.875rem;
      color: var(--color-text-muted);
    }
    .citations__title { font-size: 1rem; margin-bottom: var(--space-sm); }
    .citations__date { color: var(--color-text-subtle); }
  `,
})
export class CitationListComponent {
  readonly sources = input<Source[]>([]);
  readonly label = input('Sources');
}
