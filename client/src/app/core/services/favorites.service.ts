import { computed, inject, Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';

const FAVORITES_KEY = 'ggg-favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly storage = inject(StorageService);
  private readonly favoriteSlugs = signal<string[]>(this.storage.get<string[]>(FAVORITES_KEY, []));

  readonly favorites = this.favoriteSlugs.asReadonly();
  readonly count = computed(() => this.favoriteSlugs().length);

  isFavorite(slug: string): boolean {
    return this.favoriteSlugs().includes(slug);
  }

  toggle(slug: string): void {
    this.favoriteSlugs.update((current) => {
      const next = current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [...current, slug];
      this.storage.set(FAVORITES_KEY, next);
      return next;
    });
  }

  remove(slug: string): void {
    this.favoriteSlugs.update((current) => {
      const next = current.filter((s) => s !== slug);
      this.storage.set(FAVORITES_KEY, next);
      return next;
    });
  }
}
