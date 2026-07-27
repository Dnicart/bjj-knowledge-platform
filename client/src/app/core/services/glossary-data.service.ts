import { Injectable } from '@angular/core';
import { GLOSSARY_TERMS } from '../../data/glossary/glossary.data';
import { GlossaryTerm } from '../models';

@Injectable({ providedIn: 'root' })
export class GlossaryDataService {
  getAll(): GlossaryTerm[] {
    return GLOSSARY_TERMS;
  }

  getBySlug(slug: string): GlossaryTerm | undefined {
    return GLOSSARY_TERMS.find((t) => t.slug === slug);
  }

  search(query: string): GlossaryTerm[] {
    if (!query.trim()) {
      return GLOSSARY_TERMS;
    }
    const q = query.toLowerCase();
    return GLOSSARY_TERMS.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.shortDefinition.toLowerCase().includes(q) ||
        t.alsoKnownAs?.some((a) => a.toLowerCase().includes(q)),
    );
  }

  getLetters(): string[] {
    const letters = new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase()));
    return [...letters].sort();
  }
}
