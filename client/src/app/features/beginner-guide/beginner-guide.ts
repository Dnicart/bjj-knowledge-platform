import { Component, inject, OnInit } from '@angular/core';
import { BEGINNER_GUIDE_SECTIONS } from '../../data/content/static-content.data';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { ContentSectionComponent } from '../../shared/components/content-section/content-section';

@Component({
  selector: 'app-beginner-guide',
  imports: [BreadcrumbsComponent, PageHeaderComponent, ContentSectionComponent],
  templateUrl: './beginner-guide.html',
})
export class BeginnerGuideComponent implements OnInit {
  private readonly seo = inject(SeoService);
  readonly sections = BEGINNER_GUIDE_SECTIONS;

  ngOnInit(): void {
    this.seo.updatePage('Beginner Guide', 'What to expect in your first BJJ class.');
  }
}
