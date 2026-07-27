import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  template: `
    <div class="form-field">
      <label [for]="inputId()">{{ label() }}</label>
      <input
        [id]="inputId()"
        type="search"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
        [attr.aria-describedby]="describedBy() ?? null"
      />
    </div>
  `,
})
export class SearchFieldComponent {
  readonly inputId = input('search');
  readonly label = input('Search');
  readonly placeholder = input('Search...');
  readonly value = input('');
  readonly describedBy = input<string>();
  readonly valueChange = output<string>();

  onInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }
}
