import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-about',
  imports: [BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './about.html',
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePage('About', 'About Ground Game Guide.');
  }
}
