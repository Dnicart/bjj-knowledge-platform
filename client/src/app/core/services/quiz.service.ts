import { Injectable } from '@angular/core';
import { QUIZ_QUESTIONS } from '../../data/quiz/quiz.data';
import { QuizQuestion } from '../models';

export interface QuizResult {
  score: number;
  total: number;
  percent: number;
  answers: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  getQuestions(): QuizQuestion[] {
    return QUIZ_QUESTIONS;
  }

  score(answers: Record<string, string>): QuizResult {
    const questions = QUIZ_QUESTIONS;
    let score = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctChoiceId) {
        score++;
      }
    }
    return {
      score,
      total: questions.length,
      percent: Math.round((score / questions.length) * 100),
      answers,
    };
  }
}
