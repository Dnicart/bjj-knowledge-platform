import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  template: `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a routerLink="/">Home</a></li>
        @for (item of items(); track item.label) {
          <li>
            @if (item.route) {
              <a [routerLink]="item.route">{{ item.label }}</a>
            } @else {
              <span aria-current="page">{{ item.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
})
export class BreadcrumbsComponent {
  readonly items = input<BreadcrumbItem[]>([]);
}
