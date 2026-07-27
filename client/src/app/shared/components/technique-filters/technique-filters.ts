import { Component, inject, input, output } from '@angular/core';
import { TechniqueCategory, TechniqueFilters, GiMode, Difficulty } from '../../../core/models';

@Component({
  selector: 'app-technique-filters',
  template: `
    <fieldset class="fieldset">
      <legend>Filter techniques</legend>

      <div class="form-field">
        <label for="gi-filter">Gi mode</label>
        <select id="gi-filter" [value]="filters().giMode" (change)="onGiChange($event)">
          <option value="all">All</option>
          <option value="gi">Gi</option>
          <option value="no-gi">No-Gi</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div class="form-field">
        <label for="difficulty-filter">Difficulty</label>
        <select id="difficulty-filter" [value]="filters().difficulty" (change)="onDifficultyChange($event)">
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div class="form-field">
        <label for="category-filter">Category</label>
        <select id="category-filter" [value]="categoryValue()" (change)="onCategoryChange($event)">
          <option value="">All categories</option>
          @for (cat of categories; track cat) {
            <option [value]="cat">{{ cat }}</option>
          }
        </select>
      </div>

      <button type="button" class="btn btn--ghost" (click)="clear.emit()">Clear filters</button>
    </fieldset>
  `,
})
export class TechniqueFiltersComponent {
  readonly filters = input.required<TechniqueFilters>();
  readonly filtersChange = output<Partial<TechniqueFilters>>();
  readonly clear = output<void>();

  readonly categories: TechniqueCategory[] = [
    'escape', 'sweep', 'guard-pass', 'submission', 'takedown', 'fundamental',
  ];

  categoryValue(): string {
    return this.filters().categories[0] ?? '';
  }

  onGiChange(event: Event): void {
    this.filtersChange.emit({ giMode: (event.target as HTMLSelectElement).value as GiMode | 'all' });
  }

  onDifficultyChange(event: Event): void {
    this.filtersChange.emit({ difficulty: (event.target as HTMLSelectElement).value as Difficulty | 'all' });
  }

  onCategoryChange(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.filtersChange.emit({ categories: val ? [val as TechniqueCategory] : [] });
  }
}
