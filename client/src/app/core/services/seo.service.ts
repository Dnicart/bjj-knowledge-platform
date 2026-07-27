import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePage(title: string, description?: string): void {
    this.title.setTitle(`${title} | Ground Game Guide`);
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
