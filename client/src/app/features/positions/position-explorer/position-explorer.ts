import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { POSITION_HOTSPOTS } from '../../data/positions/positions.data';
import { PositionDataService } from '../../core/services/position-data.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { PositionDiagramComponent } from '../../shared/components/position-diagram/position-diagram';

@Component({
  selector: 'app-position-explorer',
  imports: [RouterLink, BreadcrumbsComponent, PageHeaderComponent, PositionDiagramComponent],
  templateUrl: './position-explorer.html',
})
export class PositionExplorerComponent implements OnInit {
  private readonly positionData = inject(PositionDataService);
  private readonly seo = inject(SeoService);

  readonly positions = this.positionData.getAll();
  readonly hotspots = POSITION_HOTSPOTS;
  readonly selectedSlug = signal<string | null>(null);

  ngOnInit(): void {
    this.seo.updatePage('Position Explorer', 'Explore core BJJ positions interactively.');
  }

  onSelect(slug: string): void {
    this.selectedSlug.set(slug);
  }

  selectedPosition() {
    const slug = this.selectedSlug();
    return slug ? this.positionData.getBySlug(slug) : null;
  }
}
