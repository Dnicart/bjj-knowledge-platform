import { Component, inject, OnInit } from '@angular/core';
import { ArticleDataService } from '../../../core/services/article-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header';
import { ArticleCardComponent } from '../../../shared/components/article-card/article-card';

@Component({
  selector: 'app-article-list',
  imports: [BreadcrumbsComponent, PageHeaderComponent, ArticleCardComponent],
  templateUrl: './article-list.html',
})
export class ArticleListComponent implements OnInit {
  private readonly articleData = inject(ArticleDataService);
  private readonly seo = inject(SeoService);
  readonly articles = this.articleData.getAll();

  ngOnInit(): void {
    this.seo.updatePage('Articles', 'Educational articles about Brazilian Jiu-Jitsu.');
  }
}
