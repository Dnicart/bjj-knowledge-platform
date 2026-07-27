import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';
import { StorageService } from './storage.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  const storage = new Map<string, string>();

  beforeEach(() => {
    storage.clear();
    TestBed.configureTestingModule({
      providers: [
        FavoritesService,
        {
          provide: StorageService,
          useValue: {
            isAvailable: () => true,
            get: <T>(key: string, fallback: T) => {
              const raw = storage.get(key);
              return raw ? (JSON.parse(raw) as T) : fallback;
            },
            set: <T>(key: string, value: T) => {
              storage.set(key, JSON.stringify(value));
              return true;
            },
            remove: (key: string) => storage.delete(key),
          },
        },
      ],
    });
    service = TestBed.inject(FavoritesService);
  });

  it('toggles favorites', () => {
    expect(service.isFavorite('triangle-choke')).toBe(false);
    service.toggle('triangle-choke');
    expect(service.isFavorite('triangle-choke')).toBe(true);
    service.toggle('triangle-choke');
    expect(service.isFavorite('triangle-choke')).toBe(false);
  });
});
