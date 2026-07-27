import { Component, input, output } from '@angular/core';
import { PositionHotspot } from '../../../core/models';

@Component({
  selector: 'app-position-diagram',
  template: `
    <div
      class="position-diagram"
      role="img"
      aria-label="BJJ position map. Select a position to view details."
    >
      <svg viewBox="0 0 100 80" class="position-diagram__svg" aria-hidden="true">
        <rect x="5" y="5" width="90" height="70" rx="4" fill="var(--color-surface-elevated)" stroke="var(--color-border)" />
        <text x="50" y="42" text-anchor="middle" fill="var(--color-text-subtle)" font-size="4">Mat</text>
        @for (spot of hotspots(); track spot.positionSlug) {
          <rect
            [attr.x]="spot.x"
            [attr.y]="spot.y"
            [attr.width]="spot.width"
            [attr.height]="spot.height"
            rx="2"
            class="position-diagram__zone"
            [class.position-diagram__zone--active]="selectedSlug() === spot.positionSlug"
          />
        }
      </svg>
      <div class="position-diagram__buttons">
        @for (spot of hotspots(); track spot.positionSlug) {
          <button
            type="button"
            class="btn btn--secondary position-diagram__btn"
            [class.position-diagram__btn--active]="selectedSlug() === spot.positionSlug"
            [attr.aria-pressed]="selectedSlug() === spot.positionSlug"
            (click)="select.emit(spot.positionSlug)"
          >
            {{ spot.label }}
          </button>
        }
      </div>
    </div>
  `,
  styles: `
    .position-diagram__svg { width: 100%; max-width: 24rem; display: block; margin: 0 auto var(--space-md); }
    .position-diagram__zone { fill: var(--color-primary); opacity: 0.15; }
    .position-diagram__zone--active { opacity: 0.4; }
    .position-diagram__buttons { display: flex; flex-wrap: wrap; gap: var(--space-sm); justify-content: center; }
    .position-diagram__btn--active { background: var(--color-primary); color: white; border-color: var(--color-primary); }
  `,
})
export class PositionDiagramComponent {
  readonly hotspots = input<PositionHotspot[]>([]);
  readonly selectedSlug = input<string | null>(null);
  readonly select = output<string>();
}
