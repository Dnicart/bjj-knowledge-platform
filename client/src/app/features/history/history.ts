import { Component, inject, OnInit } from '@angular/core';
import { HISTORY_SOURCES, HISTORY_TIMELINE } from '../../data/content/static-content.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { CitationListComponent } from '../../shared/components/citation-list/citation-list';

@Component({
  selector: 'app-history',
  imports: [BreadcrumbsComponent, PageHeaderComponent, CitationListComponent],
  templateUrl: './history.html',
})
export class HistoryComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly timeline = HISTORY_TIMELINE;
  readonly sources = HISTORY_SOURCES;

  ngOnInit(): void {
    this.seo.updatePage('BJJ History', 'The history and origins of Brazilian Jiu-Jitsu.');
  }
}
