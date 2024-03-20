import { reactive } from 'vue';
import { fetchFactory } from '@/library/modules/fetch/fetchFactory';
import { loader } from '@/library/modules/loader/loader';
import router, { Route } from '@/library/modules/router';

export type BaseQuizQuestionData = {
  id: string;
  description: string;
  options: { id: string; name: string }[];
};

export type QuizQuestionData = {
  selectedOptionId?: string;
  correctOptionId?: string;
} & BaseQuizQuestionData;

export type QuizStatusData = {
  answeredQuestions: number;
  totalQuestions: number;
  correctAnswers: number;
  quizStartedAt: string;
  quizEndedAt: string;
  answers?: null;
};

export type QuizControllerState = {
  questionData?: QuizQuestionData;
  nextQuestionData?: BaseQuizQuestionData;
  quizStatusData?: QuizStatusData;
};

export type AnswerAndNextQuestionResponse = {
  id: string;
  selectedOptionId: string;
  correctOptionId: string;
  nextQuestion?: BaseQuizQuestionData;
};

const state = reactive<QuizControllerState>({
  questionData: undefined,
  nextQuestionData: undefined,
  quizStatusData: undefined,
});

export const quizController = () => {
  const { protectedFetch } = fetchFactory();
  const { showLoader, hideLoader } = loader();
  const { push } = router;

  const quizStatus = async () => {
    const response = await protectedFetch<QuizStatusData>({
      url: '/status',
      method: 'get',
    });

    state.quizStatusData = response.data;
    return response;
  };

  const starQuiz = async () => {
    showLoader();

    const response = await protectedFetch<QuizQuestionData>({
      url: '/question',
      method: 'get',
    });

    await quizStatus();

    state.questionData = response.data;
    await push(Route.QuestionChoice);
    hideLoader();
  };

  const answerQuestion = async ({ selectedOptionId }: { selectedOptionId: string }) => {
    showLoader();

    const response = await protectedFetch<AnswerAndNextQuestionResponse>({
      url: '/answer-and-next',
      method: 'post',
      data: {
        questionId: state.questionData?.id,
        selectedOptionId,
      },
    });

    state.questionData = {
      ...state.questionData,
      correctOptionId: response.data.correctOptionId,
      selectedOptionId: response.data.selectedOptionId,
    } as QuizQuestionData;

    state.nextQuestionData = response.data.nextQuestion;

    push(Route.QuestionStatus);
    hideLoader();
  };

  const nextQuestion = async () => {
    if (state.nextQuestionData) {
      if (
        state.quizStatusData?.answeredQuestions !== undefined &&
        state.quizStatusData?.answeredQuestions !== null
      ) {
        state.quizStatusData.answeredQuestions += 1;
      }

      state.questionData = state.nextQuestionData;
      push(Route.QuestionChoice);
      return true;
    }

    await quizStatus();
    push(Route.QuizStatus);
    return true;
  };

  return {
    starQuiz,
    answerQuestion,
    nextQuestion,
    quizState: state,
  };
};
