import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningProgressService } from '../../core/services/learning-progress.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-learning-path',
  imports: [RouterLink, BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './learning-path.html',
})
export class LearningPathComponent implements OnInit {
  protected readonly progress = inject(LearningProgressService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePage('Learning Path', 'A guided beginner curriculum for BJJ.');
  }

  getLink(item: { linkType: string; linkTarget: string }): string[] {
    switch (item.linkType) {
      case 'technique':
        return ['/techniques', item.linkTarget];
      case 'article':
        return ['/articles', item.linkTarget];
      default:
        return [item.linkTarget];
    }
  }

  toggle(id: string): void {
    this.progress.toggle(id);
  }
}
