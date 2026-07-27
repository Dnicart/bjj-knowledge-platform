import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Technique } from '../../core/models';
import { FEATURED_TECHNIQUE_SLUGS } from '../../data/techniques/techniques.data';
import { TechniqueDataService } from '../../core/services/technique-data.service';
import { SeoService } from '../../core/services/seo.service';
import { TechniqueCardComponent } from '../../shared/components/technique-card/technique-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TechniqueCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private readonly techniqueData = inject(TechniqueDataService);
  private readonly seo = inject(SeoService);

  featured: Technique[] = [];

  ngOnInit(): void {
    this.seo.updatePage(
      'Home',
      'Learn Brazilian Jiu-Jitsu fundamentals with clear guides, technique library, and beginner learning path.',
    );
    this.featured = FEATURED_TECHNIQUE_SLUGS.map((s) => this.techniqueData.getBySlug(s)).filter(
      (t): t is Technique => t !== undefined,
    );
  }
}
