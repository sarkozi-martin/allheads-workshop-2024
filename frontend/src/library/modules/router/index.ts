import { createRouter, createMemoryHistory } from 'vue-router';
import HomeView from '../../../views/HomeView.vue';
import { layout } from '@/library/modules/layout/layout';
import ErrorView from '@/views/ErrorView.vue';
import QuizStatus from '@/views/QuizStatus.vue';
import QuestionChoice from '@/views/QuestionChoice.vue';
import QuestionStatus from '@/views/QuestionStatus.vue';

export enum Route {
  Home = '/',
  QuestionChoice = '/question-choice',
  QuestionStatus = '/question-status',
  QuizStatus = '/quiz-status',
  Error = '/error-view',
}

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.Home,
      name: 'home-view',
      component: HomeView,
    },

    {
      path: Route.QuestionChoice,
      name: 'question-choice-view',
      component: QuestionChoice,
    },

    {
      path: Route.QuestionStatus,
      name: 'question-status-view',
      component: QuestionStatus,
    },

    {
      path: Route.QuizStatus,
      name: 'quiz-status-view',
      component: QuizStatus,
    },

    {
      path: Route.Error,
      name: 'error-view',
      component: ErrorView,
    },
  ],
});

router.beforeEach(() => {
  const { setLayoutVariant } = layout();
  setLayoutVariant('default');
});

export default router;
