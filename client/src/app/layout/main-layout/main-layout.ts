import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FavoritesService } from '../../core/services/favorites.service';
import { SiteFooterComponent } from './site-footer/site-footer';
import { MobileNavComponent } from './mobile-nav/mobile-nav';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SiteFooterComponent, MobileNavComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
  protected readonly favoritesService = inject(FavoritesService);
  protected readonly mobileNavOpen = signal(false);

  toggleMobileNav(): void {
    this.mobileNavOpen.update((v) => !v);
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }
}
