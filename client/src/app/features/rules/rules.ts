import { Component, inject, OnInit } from '@angular/core';
import { RULES_DATA } from '../../data/content/static-content.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { CitationListComponent } from '../../shared/components/citation-list/citation-list';

@Component({
  selector: 'app-rules',
  imports: [BreadcrumbsComponent, PageHeaderComponent, CitationListComponent],
  templateUrl: './rules.html',
})
export class RulesComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly rules = RULES_DATA;

  ngOnInit(): void {
    this.seo.updatePage('Competition Rules', 'Basic IBJJF scoring and rules overview.');
  }
}
