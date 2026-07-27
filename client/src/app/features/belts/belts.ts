import { Component, inject, OnInit } from '@angular/core';
import { BELTS } from '../../data/belts/belts.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-belts',
  imports: [BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './belts.html',
  styleUrl: './belts.scss',
})
export class BeltsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly belts = BELTS;

  ngOnInit(): void {
    this.seo.updatePage('Adult Belt Levels', 'Overview of the adult BJJ belt system.');
  }
}
