import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly platformId = inject(PLATFORM_ID);

  isAvailable(): boolean {
    return isPlatformBrowser(this.platformId) && typeof localStorage !== 'undefined';
  }

  get<T>(key: string, fallback: T): T {
    if (!this.isAvailable()) {
      return fallback;
    }
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) {
        return fallback;
      }
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }

  set<T>(key: string, value: T): boolean {
    if (!this.isAvailable()) {
      return false;
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  remove(key: string): void {
    if (this.isAvailable()) {
      localStorage.removeItem(key);
    }
  }
}
