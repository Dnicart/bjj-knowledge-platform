import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
            layout?: unknown;
          },
          elementId: string,
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export interface SupportedLanguage {
  readonly code: string;
  readonly translateCode: string;
  readonly label: string;
  readonly flag: string;
  readonly dir: 'ltr' | 'rtl';
  readonly speakerRank: number;
}

// English is pinned first per product request; the rest are ordered by approximate
// global speaker counts so the most widely used languages appear earlier.
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { code: 'en', translateCode: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr', speakerRank: 0 },
  { code: 'es', translateCode: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr', speakerRank: 1 },
  { code: 'ar', translateCode: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl', speakerRank: 2 },
  { code: 'fr', translateCode: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr', speakerRank: 3 },
  { code: 'pt-BR', translateCode: 'pt', label: 'Português (Brasil)', flag: '🇧🇷', dir: 'ltr', speakerRank: 4 },
  { code: 'ja', translateCode: 'ja', label: '日本語', flag: '🇯🇵', dir: 'ltr', speakerRank: 5 },
  { code: 'pl', translateCode: 'pl', label: 'Polski', flag: '🇵🇱', dir: 'ltr', speakerRank: 6 },
  { code: 'sv', translateCode: 'sv', label: 'Svenska', flag: '🇸🇪', dir: 'ltr', speakerRank: 7 },
];

const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];
const STORAGE_KEY = 'bjj-kp-site-language';
const GOOGLE_COOKIE = 'googtrans';
const GOOGLE_ELEMENT_ID = 'google_translate_element';

@Injectable({ providedIn: 'root' })
export class SiteLanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  private scriptRequested = false;
  private widgetInitialized = false;

  readonly languages = SUPPORTED_LANGUAGES;
  readonly currentLanguage = signal<SupportedLanguage>(DEFAULT_LANGUAGE);

  constructor() {
    const initial = this.getInitialLanguage();
    this.currentLanguage.set(initial);
    this.applyDocumentLanguage(initial);

    if (this.isBrowser()) {
      this.ensureGoogleTranslate();
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && this.currentLanguage().code !== DEFAULT_LANGUAGE.code) {
          queueMicrotask(() => {
            window.setTimeout(() => this.syncWidgetToCurrentLanguage(true), 200);
          });
        }
      });
    }
  }

  selectLanguage(code: string): void {
    const next = this.getLanguageByCode(code);
    this.currentLanguage.set(next);
    this.persistLanguage(next);
    this.applyDocumentLanguage(next);

    if (this.isBrowser()) {
      window.location.assign(this.router.url);
    }
  }

  private getInitialLanguage(): SupportedLanguage {
    if (!this.isBrowser()) {
      return DEFAULT_LANGUAGE;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const fromStorage = stored ? this.findByCode(stored) : undefined;
    if (fromStorage) {
      return fromStorage;
    }

    const fromCookie = this.readGoogleCookie();
    return fromCookie ? this.findByTranslateCode(fromCookie) ?? DEFAULT_LANGUAGE : DEFAULT_LANGUAGE;
  }

  private persistLanguage(language: SupportedLanguage): void {
    if (!this.isBrowser()) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, language.code);
    this.writeGoogleCookie(language);
  }

  private applyDocumentLanguage(language: SupportedLanguage): void {
    this.document.documentElement.lang = language.code;
    this.document.documentElement.dir = language.dir;
    this.document.body.dir = language.dir;
  }

  private ensureGoogleTranslate(): void {
    if (!this.isBrowser() || this.scriptRequested) {
      return;
    }

    this.scriptRequested = true;
    window.googleTranslateElementInit = () => {
      const translate = window.google?.translate;
      if (!translate?.TranslateElement) {
        return;
      }

      new translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: this.languages.map((language) => language.translateCode).join(','),
          autoDisplay: false,
        },
        GOOGLE_ELEMENT_ID,
      );

      this.widgetInitialized = true;
      window.setTimeout(() => this.syncWidgetToCurrentLanguage(), 250);
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return;
    }

    const script = this.document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    this.document.head.appendChild(script);
  }

  private syncWidgetToCurrentLanguage(forceRefresh = false): void {
    if (!this.isBrowser() || !this.widgetInitialized) {
      return;
    }

    const combo = this.document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (!combo) {
      return;
    }

    const targetValue = this.currentLanguage().translateCode === DEFAULT_LANGUAGE.translateCode
      ? ''
      : this.currentLanguage().translateCode;

    if (!targetValue) {
      return;
    }

    if (forceRefresh && combo.value === targetValue) {
      combo.value = '';
      combo.dispatchEvent(new Event('change'));
      window.setTimeout(() => {
        combo.value = targetValue;
        combo.dispatchEvent(new Event('change'));
      }, 0);
      return;
    }

    if (combo.value !== targetValue) {
      combo.value = targetValue;
      combo.dispatchEvent(new Event('change'));
    }
  }

  private writeGoogleCookie(language: SupportedLanguage): void {
    const cookieValue =
      language.translateCode === DEFAULT_LANGUAGE.translateCode
        ? ''
        : `/en/${language.translateCode}`;

    this.document.cookie = `${GOOGLE_COOKIE}=${cookieValue};path=/;max-age=31536000`;
  }

  private readGoogleCookie(): string | null {
    const match = this.document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    if (!match) {
      return null;
    }

    const parts = decodeURIComponent(match[1]).split('/');
    return parts.at(-1) || null;
  }

  private getLanguageByCode(code: string): SupportedLanguage {
    return this.findByCode(code) ?? DEFAULT_LANGUAGE;
  }

  private findByCode(code: string): SupportedLanguage | undefined {
    return this.languages.find((language) => language.code === code);
  }

  private findByTranslateCode(code: string): SupportedLanguage | undefined {
    return this.languages.find((language) => language.translateCode === code);
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
