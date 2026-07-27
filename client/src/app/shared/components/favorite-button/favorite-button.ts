import { Component, inject, input } from '@angular/core';
import { FavoritesService } from '../../../core/services/favorites.service';

@Component({
  selector: 'app-favorite-button',
  template: `
    <button
      type="button"
      class="favorite-btn"
      [class.favorite-btn--active]="isFavorite()"
      [attr.aria-pressed]="isFavorite()"
      [attr.aria-label]="isFavorite() ? 'Remove from favorites' : 'Add to favorites'"
      (click)="toggle()"
    >
      {{ isFavorite() ? '★ Saved' : '☆ Save' }}
    </button>
  `,
  styles: `
    .favorite-btn {
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 600;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-sm);
      background: var(--color-surface);
      cursor: pointer;
      font-family: inherit;
      &:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
      &--active { background: #fef3c7; border-color: var(--color-accent); color: var(--color-accent); }
    }
  `,
})
export class FavoriteButtonComponent {
  private readonly favorites = inject(FavoritesService);
  readonly slug = input.required<string>();

  isFavorite(): boolean {
    return this.favorites.isFavorite(this.slug());
  }

  toggle(): void {
    this.favorites.toggle(this.slug());
  }
}
