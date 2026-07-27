import { describe, it, expect } from 'vitest';
import { QuizService } from './quiz.service';

describe('QuizService', () => {
  const service = new QuizService();

  it('scores all correct answers', () => {
    const questions = service.getQuestions();
    const answers: Record<string, string> = {};
    for (const q of questions) {
      answers[q.id] = q.correctChoiceId;
    }
    const result = service.score(answers);
    expect(result.score).toBe(questions.length);
    expect(result.percent).toBe(100);
  });

  it('scores zero for wrong answers', () => {
    const questions = service.getQuestions();
    const answers: Record<string, string> = {};
    for (const q of questions) {
      const wrong = q.choices.find((c) => c.id !== q.correctChoiceId);
      answers[q.id] = wrong!.id;
    }
    const result = service.score(answers);
    expect(result.score).toBe(0);
  });
});
