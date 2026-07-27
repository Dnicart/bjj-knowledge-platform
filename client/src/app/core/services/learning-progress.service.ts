import { computed, inject, Injectable, signal } from '@angular/core';
import { LEARNING_PATH } from '../../data/learning-path/learning-path.data';
import { StorageService } from './storage.service';

const PROGRESS_KEY = 'ggg-learning-progress';

@Injectable({ providedIn: 'root' })
export class LearningProgressService {
  private readonly storage = inject(StorageService);
  private readonly completedIds = signal<string[]>(this.storage.get<string[]>(PROGRESS_KEY, []));

  readonly completed = this.completedIds.asReadonly();
  readonly items = LEARNING_PATH;
  readonly total = LEARNING_PATH.length;
  readonly completedCount = computed(() => this.completedIds().length);
  readonly progressPercent = computed(() =>
    Math.round((this.completedCount() / this.total) * 100),
  );

  isCompleted(id: string): boolean {
    return this.completedIds().includes(id);
  }

  toggle(id: string): void {
    this.completedIds.update((current) => {
      const next = current.includes(id)
        ? current.filter((i) => i !== id)
        : [...current, id];
      this.storage.set(PROGRESS_KEY, next);
      return next;
    });
  }
}
