import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  imports: [RouterLink],
  template: `
    @if (open()) {
      <div class="mobile-nav__backdrop" (click)="closed.emit()" aria-hidden="true"></div>
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <button type="button" class="mobile-nav__close" (click)="closed.emit()" aria-label="Close menu">✕</button>
        <a routerLink="/" (click)="closed.emit()">Home</a>
        <a routerLink="/techniques" (click)="closed.emit()">Techniques</a>
        <a routerLink="/positions" (click)="closed.emit()">Positions</a>
        <a routerLink="/learning-path" (click)="closed.emit()">Learning Path</a>
        <a routerLink="/glossary" (click)="closed.emit()">Glossary</a>
        <a routerLink="/articles" (click)="closed.emit()">Articles</a>
        <a routerLink="/quiz" (click)="closed.emit()">Quiz</a>
        <a routerLink="/favorites" (click)="closed.emit()">Favorites</a>
        <hr />
        <a routerLink="/history" (click)="closed.emit()">History</a>
        <a routerLink="/belts" (click)="closed.emit()">Belts</a>
        <a routerLink="/beginner-guide" (click)="closed.emit()">Beginner Guide</a>
        <a routerLink="/rules" (click)="closed.emit()">Rules</a>
        <a routerLink="/about" (click)="closed.emit()">About</a>
      </nav>
    }
  `,
  styles: `
    .mobile-nav__backdrop {
      position: fixed; inset: 0; background: rgb(0 0 0 / 0.4); z-index: 200;
    }
    .mobile-nav {
      position: fixed; top: 0; right: 0; bottom: 0; width: min(18rem, 85vw);
      background: var(--color-surface); z-index: 201; padding: var(--space-xl) var(--space-lg);
      display: flex; flex-direction: column; gap: var(--space-sm);
      box-shadow: var(--shadow-md);
      a { text-decoration: none; color: var(--color-text); font-weight: 500; padding: var(--space-sm); border-radius: var(--radius-sm);
        &:hover { background: var(--color-surface-elevated); } }
      hr { border: none; border-top: 1px solid var(--color-border); margin: var(--space-sm) 0; }
    }
    .mobile-nav__close {
      align-self: flex-end; background: none; border: none; font-size: 1.25rem; cursor: pointer; padding: var(--space-sm);
    }
  `,
})
export class MobileNavComponent {
  readonly open = input(false);
  readonly closed = output<void>();
}
