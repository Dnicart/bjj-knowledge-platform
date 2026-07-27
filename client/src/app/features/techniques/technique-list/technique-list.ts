import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechniqueSort, TechniqueFilters } from '../../../core/models';
import { TechniqueDataService } from '../../../core/services/technique-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { filtersToParams, parseFiltersFromParams } from '../../../core/utils/technique-filters';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header';
import { SearchFieldComponent } from '../../../shared/components/search-field/search-field';
import { TechniqueFiltersComponent } from '../../../shared/components/technique-filters/technique-filters';
import { TechniqueCardComponent } from '../../../shared/components/technique-card/technique-card';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-technique-list',
  imports: [
    BreadcrumbsComponent,
    PageHeaderComponent,
    SearchFieldComponent,
    TechniqueFiltersComponent,
    TechniqueCardComponent,
    EmptyStateComponent,
  ],
  templateUrl: './technique-list.html',
})
export class TechniqueListComponent implements OnInit {
  private readonly techniqueData = inject(TechniqueDataService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly techniques = this.techniqueData.filteredTechniques;
  readonly filters = this.techniqueData.filters;

  ngOnInit(): void {
    this.seo.updatePage('Technique Library', 'Browse and filter beginner BJJ techniques.');
    this.route.queryParamMap.subscribe((params) => {
      const parsed = parseFiltersFromParams(Object.fromEntries(params.keys.map((k) => [k, params.get(k)!])));
      this.techniqueData.loadFiltersFromParams(parsed);
      const sort = (params.get('sort') as TechniqueSort) ?? 'name-asc';
      this.techniqueData.setSort(sort);
    });
  }

  onSearch(query: string): void {
    this.updateFilters({ query });
  }

  onFiltersChange(partial: Partial<TechniqueFilters>): void {
    this.updateFilters(partial);
  }

  clearFilters(): void {
    this.techniqueData.resetFilters();
    this.router.navigate(['/techniques']);
  }

  private updateFilters(partial: Partial<TechniqueFilters>): void {
    this.techniqueData.setFilters(partial);
    const params = filtersToParams({ ...this.techniqueData.filters(), ...partial }, this.techniqueData.sort());
    this.router.navigate(['/techniques'], { queryParams: params });
  }
}
