import { Component, input } from '@angular/core';
import { ContentSection } from '../../../core/models';

@Component({
  selector: 'app-content-section',
  template: `
    @for (section of sections(); track section.heading) {
      <section class="content-section">
        <h2>{{ section.heading }}</h2>
        @for (p of section.paragraphs; track p) {
          <p>{{ p }}</p>
        }
        @if (section.bullets?.length) {
          <ul>
            @for (item of section.bullets; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        }
      </section>
    }
  `,
  styles: `.content-section { margin-bottom: var(--space-xl); }`,
})
export class ContentSectionComponent {
  readonly sections = input<ContentSection[]>([]);
}
