import { Component, inject, OnInit, signal } from '@angular/core';
import { QuizService, QuizResult } from '../../core/services/quiz.service';
import { SeoService } from '../../core/services/seo.service';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-quiz',
  imports: [BreadcrumbsComponent, PageHeaderComponent],
  templateUrl: './quiz.html',
})
export class QuizComponent implements OnInit {
  private readonly quizService = inject(QuizService);
  private readonly seo = inject(SeoService);

  readonly questions = this.quizService.getQuestions();
  readonly answers = signal<Record<string, string>>({});
  readonly result = signal<QuizResult | null>(null);
  readonly submitted = signal(false);

  ngOnInit(): void {
    this.seo.updatePage('Knowledge Quiz', 'Test your BJJ beginner knowledge.');
  }

  selectAnswer(questionId: string, choiceId: string): void {
    if (this.submitted()) return;
    this.answers.update((a) => ({ ...a, [questionId]: choiceId }));
  }

  submit(): void {
    const result = this.quizService.score(this.answers());
    this.result.set(result);
    this.submitted.set(true);
  }

  retake(): void {
    this.answers.set({});
    this.result.set(null);
    this.submitted.set(false);
  }

  isSelected(questionId: string, choiceId: string): boolean {
    return this.answers()[questionId] === choiceId;
  }

  canSubmit(): boolean {
    return Object.keys(this.answers()).length >= this.questions.length;
  }
}
