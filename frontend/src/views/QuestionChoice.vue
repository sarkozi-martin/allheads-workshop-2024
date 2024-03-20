<script setup lang="ts">
import { quizController } from '@/library/modules/quizController/quizController';
import Question from '@/components/Question.vue';
import type { QuizChoiceState } from '@/types/types';

const { quizState, answerQuestion } = quizController();

const { questionData, quizStatusData } = quizState as QuizChoiceState;

const { options, description } = questionData;
const { answeredQuestions, totalQuestions } = quizStatusData;

const props = {
  buttonText: 'Odoslať',
  options,
  totalQuestions: totalQuestions,
  questionNumber: answeredQuestions + 1,
  questionText: description,
  modelValue: undefined,
};

const completeView = (newValue: string) => {
  answerQuestion({ selectedOptionId: newValue });
};
</script>

<template>
  <Question v-bind="props" @update:model-value="completeView" />
</template>
