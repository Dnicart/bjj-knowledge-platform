import { describe, it, expect } from 'vitest';
import { filterTechniques, sortTechniques } from './technique-filters';
import { TECHNIQUES } from '../../data/techniques/techniques.data';
import { DEFAULT_TECHNIQUE_FILTERS } from '../models';

describe('technique-filters', () => {
  it('filters by query', () => {
    const result = filterTechniques(TECHNIQUES, { ...DEFAULT_TECHNIQUE_FILTERS, query: 'triangle' });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('triangle-choke');
  });

  it('filters by category', () => {
    const result = filterTechniques(TECHNIQUES, {
      ...DEFAULT_TECHNIQUE_FILTERS,
      categories: ['escape'],
    });
    expect(result.every((t) => t.category === 'escape')).toBe(true);
  });

  it('sorts by name ascending', () => {
    const sorted = sortTechniques(TECHNIQUES, 'name-asc');
    expect(sorted[0].name.localeCompare(sorted[sorted.length - 1].name)).toBeLessThanOrEqual(0);
  });
});
