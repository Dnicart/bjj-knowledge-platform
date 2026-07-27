import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../core/models';
import { ArticleDataService } from '../../../core/services/article-data.service';
import { SeoService } from '../../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs';
import { CitationListComponent } from '../../../shared/components/citation-list/citation-list';

@Component({
  selector: 'app-article-detail',
  imports: [BreadcrumbsComponent, CitationListComponent],
  templateUrl: './article-detail.html',
})
export class ArticleDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly articleData = inject(ArticleDataService);
  private readonly seo = inject(SeoService);

  article: Article | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      const found = this.articleData.getBySlug(slug);
      if (!found) {
        void this.router.navigate(['/404']);
        return;
      }
      this.article = found;
      this.seo.updatePage(found.title, found.summary);
    });
  }
}
