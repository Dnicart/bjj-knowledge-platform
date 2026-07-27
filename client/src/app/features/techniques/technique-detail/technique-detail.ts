import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Technique } from '../../../core/models';
import { TechniqueDataService } from '../../../core/services/technique-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs';
import { FavoriteButtonComponent } from '../../../shared/components/favorite-button/favorite-button';
import { RelatedTechniquesComponent } from '../../../shared/components/related-techniques/related-techniques';
import { CitationListComponent } from '../../../shared/components/citation-list/citation-list';

@Component({
  selector: 'app-technique-detail',
  imports: [
    BreadcrumbsComponent,
    FavoriteButtonComponent,
    RelatedTechniquesComponent,
    CitationListComponent,
  ],
  templateUrl: './technique-detail.html',
})
export class TechniqueDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly techniqueData = inject(TechniqueDataService);
  private readonly seo = inject(SeoService);

  technique: Technique | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const found = this.techniqueData.getBySlug(slug);
      if (!found) {
        void this.router.navigate(['/404']);
        return;
      }
      this.technique = found;
      this.seo.updatePage(found.name, found.summary);
    });
  }
}
