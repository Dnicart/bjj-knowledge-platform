import { Component, inject, OnInit, signal } from '@angular/core';
import { GlossaryDataService } from '../../core/services/glossary-data.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';
import { SearchFieldComponent } from '../../shared/components/search-field/search-field';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-glossary',
  imports: [BreadcrumbsComponent, PageHeaderComponent, SearchFieldComponent, EmptyStateComponent],
  templateUrl: './glossary.html',
})
export class GlossaryComponent implements OnInit {
  private readonly glossaryData = inject(GlossaryDataService);
  private readonly seo = inject(SeoService);

  readonly query = signal('');
  readonly letters = this.glossaryData.getLetters();

  ngOnInit(): void {
    this.seo.updatePage('Glossary', 'Searchable BJJ terminology for beginners.');
  }

  filteredTerms() {
    return this.glossaryData.search(this.query());
  }

  onSearch(q: string): void {
    this.query.set(q);
  }

  jumpToLetter(letter: string): void {
    const el = document.getElementById(`glossary-${letter}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
