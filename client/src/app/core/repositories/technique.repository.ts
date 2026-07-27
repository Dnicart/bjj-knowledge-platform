import { InjectionToken } from '@angular/core';
import { Technique } from '../models';

export interface TechniqueRepository {
  getAll(): Technique[];
  getBySlug(slug: string): Technique | undefined;
  getSlugs(): string[];
}

export const TECHNIQUE_REPOSITORY = new InjectionToken<TechniqueRepository>('TECHNIQUE_REPOSITORY');
