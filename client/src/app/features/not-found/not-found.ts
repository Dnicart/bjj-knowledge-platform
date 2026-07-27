import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="page container empty-state">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a routerLink="/" class="btn btn--primary">Return home</a>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePage('Page Not Found');
  }
}
