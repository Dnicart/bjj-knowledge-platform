import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Technique } from '../../core/models';
import { FavoritesService } from '../../core/services/favorites.service';
import { TechniqueDataService } from '../../core/services/technique-data.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { TechniqueCardComponent } from '../../shared/components/technique-card/technique-card';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, BreadcrumbsComponent, PageHeaderComponent, TechniqueCardComponent, EmptyStateComponent],
  templateUrl: './favorites.html',
})
export class FavoritesComponent implements OnInit {
  private readonly favorites = inject(FavoritesService);
  private readonly techniqueData = inject(TechniqueDataService);
  private readonly seo = inject(SeoService);

  readonly favoriteTechniques = computed(() =>
    this.favorites
      .favorites()
      .map((s) => this.techniqueData.getBySlug(s))
      .filter((t): t is Technique => t !== undefined),
  );

  ngOnInit(): void {
    this.seo.updatePage('Favorites', 'Your saved techniques.');
  }
}
