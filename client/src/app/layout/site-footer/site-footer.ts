import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__grid">
          <div>
            <p class="site-footer__brand">BJJ Knowledge Platform</p>
            <p class="site-footer__tagline">Educational BJJ content for beginners.</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul class="site-footer__links">
              <li><a routerLink="/beginner-guide">Beginner Guide</a></li>
              <li><a routerLink="/history">History</a></li>
              <li><a routerLink="/belts">Belts</a></li>
              <li><a routerLink="/rules">Rules</a></li>
              <li><a routerLink="/about">About</a></li>
            </ul>
          </nav>
        </div>
        <p class="site-footer__disclaimer">
          This site is for educational purposes only. Not medical advice. Belt promotion timelines vary by academy.
          Always verify competition rules with the governing organization.
        </p>
        <p class="site-footer__copy">&copy; {{ year }} BJJ Knowledge Platform</p>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      background: var(--color-text); color: #cbd5e1; padding: var(--space-2xl) 0 var(--space-lg);
      margin-top: var(--space-3xl);
      a { color: #e2e8f0; }
      &__grid { display: grid; gap: var(--space-xl); margin-bottom: var(--space-lg);
        @media (min-width: 768px) { grid-template-columns: 1fr 1fr; } }
      &__brand { font-weight: 700; font-size: 1.125rem; color: white; margin-bottom: var(--space-xs); }
      &__tagline { font-size: 0.875rem; }
      &__links { list-style: none; padding: 0; margin: 0; display: grid; gap: var(--space-sm); }
      &__disclaimer { font-size: 0.8125rem; color: #94a3b8; margin-bottom: var(--space-md); max-width: 48rem; }
      &__copy { font-size: 0.8125rem; color: #64748b; margin: 0; }
    }
  `,
})
export class SiteFooterComponent {
  readonly year = new Date().getFullYear();
}
