import { Injectable } from '@angular/core';
import { ARTICLES } from '../../data/articles/articles.data';
import { Article } from '../models';

@Injectable({ providedIn: 'root' })
export class ArticleDataService {
  getAll(): Article[] {
    return ARTICLES;
  }

  getBySlug(slug: string): Article | undefined {
    return ARTICLES.find((a) => a.slug === slug);
  }

  getSlugs(): string[] {
    return ARTICLES.map((a) => a.slug);
  }
}
