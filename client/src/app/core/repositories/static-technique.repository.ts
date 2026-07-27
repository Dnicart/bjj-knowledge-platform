import { Injectable } from '@angular/core';
import { TECHNIQUES } from '../../data/techniques/techniques.data';
import { TechniqueRepository } from './technique.repository';

@Injectable()
export class StaticTechniqueRepository implements TechniqueRepository {
  getAll(): typeof TECHNIQUES {
    return TECHNIQUES;
  }

  getBySlug(slug: string) {
    return TECHNIQUES.find((t) => t.slug === slug);
  }

  getSlugs(): string[] {
    return TECHNIQUES.map((t) => t.slug);
  }
}
