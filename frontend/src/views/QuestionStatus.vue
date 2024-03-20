<script setup lang="ts">
import { quizController } from '@/library/modules/quizController/quizController';
import Question from '@/components/Question.vue';
import type { QuizStatusState } from '@/types/types';

const { quizState, nextQuestion } = quizController();

const { questionData, quizStatusData } = quizState as QuizStatusState;

const { options, description, selectedOptionId, correctOptionId } = questionData;

const { totalQuestions, answeredQuestions } = quizStatusData;

const props = {
  buttonText: 'Pokračovať',
  options,
  totalQuestions: totalQuestions,
  questionNumber: answeredQuestions + 1,
  questionText: description,
  correctValue: correctOptionId,
  modelValue: selectedOptionId,
};

const completeView = (data: any) => {
  console.log(data);
  nextQuestion();
};
</script>

<template>
  <Question v-bind="props" @update:model-value="completeView" />
</template>
