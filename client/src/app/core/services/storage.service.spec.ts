import { describe, it, expect } from 'vitest';
import { StorageService } from './storage.service';
import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';

describe('StorageService', () => {
  it('returns fallback when not in browser', () => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: PLATFORM_ID, useValue: 'server' },
      ],
    });
    const service = TestBed.inject(StorageService);
    expect(service.isAvailable()).toBe(false);
    expect(service.get('key', ['default'])).toEqual(['default']);
    expect(service.set('key', ['value'])).toBe(false);
  });
});
