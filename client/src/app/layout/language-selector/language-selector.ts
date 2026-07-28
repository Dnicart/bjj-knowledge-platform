import { Component, HostListener, inject, signal } from '@angular/core';
import { SiteLanguageService } from '../../core/services/site-language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss',
})
export class LanguageSelectorComponent {
  protected readonly languageService = inject(SiteLanguageService);
  protected readonly open = signal(false);

  @HostListener('document:click')
  onDocumentClick(): void {
    this.open.set(false);
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.open.update((value) => !value);
  }

  chooseLanguage(code: string, event: Event): void {
    event.stopPropagation();
    this.open.set(false);
    this.languageService.selectLanguage(code);
  }
}
