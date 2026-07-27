import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../../../core/models';
import { PositionDataService } from '../../../core/services/position-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs';
import { RelatedTechniquesComponent } from '../../../shared/components/related-techniques/related-techniques';
import { CitationListComponent } from '../../../shared/components/citation-list/citation-list';

@Component({
  selector: 'app-position-detail',
  imports: [BreadcrumbsComponent, RelatedTechniquesComponent, CitationListComponent],
  templateUrl: './position-detail.html',
})
export class PositionDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly positionData = inject(PositionDataService);
  private readonly seo = inject(SeoService);

  position: Position | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const found = this.positionData.getBySlug(slug);
      if (!found) {
        void this.router.navigate(['/404']);
        return;
      }
      this.position = found;
      this.seo.updatePage(found.name, found.summary);
    });
  }
}
