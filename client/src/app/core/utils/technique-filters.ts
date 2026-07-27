import { Technique, TechniqueFilters, TechniqueSort } from '../models';

const DIFFICULTY_ORDER = { beginner: 0, intermediate: 1, advanced: 2 };

export function filterTechniques(
  techniques: Technique[],
  filters: TechniqueFilters,
): Technique[] {
  return techniques.filter((technique) => {
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const haystack = `${technique.name} ${technique.summary} ${technique.category}`.toLowerCase();
      if (!haystack.includes(q)) {
        return false;
      }
    }
    if (filters.categories.length > 0 && !filters.categories.includes(technique.category)) {
      return false;
    }
    if (filters.giMode !== 'all') {
      if (technique.giMode !== 'both' && technique.giMode !== filters.giMode) {
        return false;
      }
    }
    if (filters.positions.length > 0 && !filters.positions.includes(technique.startingPositionSlug)) {
      return false;
    }
    if (filters.belts.length > 0 && !filters.belts.some((b) => technique.recommendedBelts.includes(b))) {
      return false;
    }
    if (filters.difficulty !== 'all' && technique.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });
}

export function sortTechniques(techniques: Technique[], sort: TechniqueSort): Technique[] {
  const sorted = [...techniques];
  switch (sort) {
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'difficulty':
      return sorted.sort(
        (a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
      );
    case 'name-asc':
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}

export function parseFiltersFromParams(params: Record<string, string>): Partial<TechniqueFilters> {
  const result: Partial<TechniqueFilters> = {};
  if (params['q']) {
    result.query = params['q'];
  }
  if (params['category']) {
    result.categories = params['category'].split(',') as TechniqueFilters['categories'];
  }
  if (params['gi']) {
    result.giMode = params['gi'] as TechniqueFilters['giMode'];
  }
  if (params['position']) {
    result.positions = params['position'].split(',');
  }
  if (params['belt']) {
    result.belts = params['belt'].split(',') as TechniqueFilters['belts'];
  }
  if (params['difficulty']) {
    result.difficulty = params['difficulty'] as TechniqueFilters['difficulty'];
  }
  return result;
}

export function filtersToParams(filters: TechniqueFilters, sort: TechniqueSort): Record<string, string> {
  const params: Record<string, string> = {};
  if (filters.query) {
    params['q'] = filters.query;
  }
  if (filters.categories.length) {
    params['category'] = filters.categories.join(',');
  }
  if (filters.giMode !== 'all') {
    params['gi'] = filters.giMode;
  }
  if (filters.positions.length) {
    params['position'] = filters.positions.join(',');
  }
  if (filters.belts.length) {
    params['belt'] = filters.belts.join(',');
  }
  if (filters.difficulty !== 'all') {
    params['difficulty'] = filters.difficulty;
  }
  if (sort !== 'name-asc') {
    params['sort'] = sort;
  }
  return params;
}
