import type { QuizControllerState } from '@/library/modules/quizController/quizController';

export type QuizChoiceState = Required<Omit<QuizControllerState, 'prevQuestionData'>>;
export type QuizStatusState = Required<QuizControllerState>;
