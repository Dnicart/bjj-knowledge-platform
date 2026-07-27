import { Injectable } from '@angular/core';
import { POSITIONS } from '../../data/positions/positions.data';
import { Position } from '../models';

@Injectable({ providedIn: 'root' })
export class PositionDataService {
  getAll(): Position[] {
    return POSITIONS;
  }

  getBySlug(slug: string): Position | undefined {
    return POSITIONS.find((p) => p.slug === slug);
  }

  getSlugs(): string[] {
    return POSITIONS.map((p) => p.slug);
  }
}
