import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechniqueDataService } from '../../../core/services/technique-data.service';
import { TechniqueCardComponent } from '../technique-card/technique-card';

@Component({
  selector: 'app-related-techniques',
  imports: [TechniqueCardComponent],
  template: `
    @if (techniques().length) {
      <section aria-labelledby="related-heading">
        <h2 id="related-heading">Related Techniques</h2>
        <div class="card-grid">
          @for (technique of techniques(); track technique.slug) {
            <app-technique-card [technique]="technique" />
          }
        </div>
      </section>
    }
  `,
})
export class RelatedTechniquesComponent {
  private readonly techniqueData = inject(TechniqueDataService);
  readonly slugs = input<string[]>([]);

  techniques() {
    return this.techniqueData.getRelated(this.slugs());
  }
}
