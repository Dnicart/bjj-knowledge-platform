import { computed, inject, Injectable, signal } from '@angular/core';
import {
  DEFAULT_TECHNIQUE_FILTERS,
  Technique,
  TechniqueFilters,
  TechniqueSort,
} from '../models';
import { TECHNIQUE_REPOSITORY } from '../repositories/technique.repository';
import { filterTechniques, sortTechniques } from '../utils/technique-filters';

@Injectable({ providedIn: 'root' })
export class TechniqueDataService {
  private readonly repository = inject(TECHNIQUE_REPOSITORY);

  private readonly filtersSignal = signal<TechniqueFilters>({ ...DEFAULT_TECHNIQUE_FILTERS });
  private readonly sortSignal = signal<TechniqueSort>('name-asc');

  readonly filters = this.filtersSignal.asReadonly();
  readonly sort = this.sortSignal.asReadonly();

  readonly filteredTechniques = computed(() => {
    const filtered = filterTechniques(this.repository.getAll(), this.filtersSignal());
    return sortTechniques(filtered, this.sortSignal());
  });

  getAll(): Technique[] {
    return this.repository.getAll();
  }

  getBySlug(slug: string): Technique | undefined {
    return this.repository.getBySlug(slug);
  }

  getSlugs(): string[] {
    return this.repository.getSlugs();
  }

  getRelated(slugs: string[]): Technique[] {
    return slugs
      .map((s) => this.repository.getBySlug(s))
      .filter((t): t is Technique => t !== undefined);
  }

  setFilters(partial: Partial<TechniqueFilters>): void {
    this.filtersSignal.update((f) => ({ ...f, ...partial }));
  }

  resetFilters(): void {
    this.filtersSignal.set({ ...DEFAULT_TECHNIQUE_FILTERS });
  }

  setSort(sort: TechniqueSort): void {
    this.sortSignal.set(sort);
  }

  loadFiltersFromParams(params: Partial<TechniqueFilters>): void {
    this.filtersSignal.update((f) => ({ ...f, ...params }));
  }
}
