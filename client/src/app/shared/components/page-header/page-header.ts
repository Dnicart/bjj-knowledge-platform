import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <header class="page-header">
      <h1>{{ title() }}</h1>
      @if (lead()) {
        <p class="page-header__lead">{{ lead() }}</p>
      }
    </header>
  `,
})
export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly lead = input<string>();
}
