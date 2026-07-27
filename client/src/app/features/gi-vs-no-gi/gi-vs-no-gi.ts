import { Component, inject, OnInit } from '@angular/core';
import { GI_VS_NO_GI_ROWS } from '../../data/content/static-content.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-gi-vs-no-gi',
  imports: [BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './gi-vs-no-gi.html',
})
export class GiVsNoGiComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly rows = GI_VS_NO_GI_ROWS;

  ngOnInit(): void {
    this.seo.updatePage('Gi vs No-Gi', 'Compare gi and no-gi Brazilian Jiu-Jitsu training.');
  }
}
