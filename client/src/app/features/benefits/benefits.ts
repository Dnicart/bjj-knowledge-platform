import { Component, inject, OnInit } from '@angular/core';
import { BENEFIT_CATEGORIES } from '../../data/content/static-content.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-benefits',
  imports: [BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './benefits.html',
})
export class BenefitsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly categories = BENEFIT_CATEGORIES;

  ngOnInit(): void {
    this.seo.updatePage('Benefits of BJJ', 'Physical, mental, and social benefits of training.');
  }
}
