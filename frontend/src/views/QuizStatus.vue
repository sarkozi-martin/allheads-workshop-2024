<script setup lang="ts">
import GInfoPage from '@/library/components/GInfoPage/GInfoPage.vue';
import GText from '@/library/components/GTypography/GText.vue';
import { quizController } from '@/library/modules/quizController/quizController';
import { computed } from 'vue';
import type { QuizChoiceState } from '@/types/types';
const { quizState } = quizController();
const { quizStatusData } = quizState as QuizChoiceState;
const { totalQuestions, correctAnswers, quizStartedAt, quizEndedAt } = quizStatusData;

const pluralizedTranslation = (value: number, translations: (string | null)[]) => {
  if (value >= 5) {
    return `${value} ${translations[2]}`;
  }

  if (value >= 2) {
    return `${value} ${translations[1]}`;
  }

  if (value === 1) {
    return `${value} ${translations[0]}`;
  }

  return '';
};

const formattedTime = computed(() => {
  const startDate = new Date(quizStartedAt);
  const endDate = new Date(quizEndedAt);

  const allSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  const minutes = Math.floor(allSeconds / 60);
  const seconds = Math.floor(allSeconds % 60);

  const minutesTranslations = ['minúta', 'minúty', 'minút'];
  const secondsTranslations = ['sekunda', 'sekundy', 'sekúnd'];

  return `${pluralizedTranslation(minutes, minutesTranslations)} ${pluralizedTranslation(seconds, secondsTranslations)}`;
});
</script>

<template>
  <GInfoPage title="Výsledok">
    <GText color="text-inverted"> Gratulujem! Úspešne si dokončil Georgeov kvíz. </GText>

    <br />

    <p class="mb-2">
      <GText color="text-inverted" element="span">
        <b>Body:</b> {{ correctAnswers }}/{{ totalQuestions }}
      </GText>
    </p>

    <p class="mb-6">
      <GText color="text-inverted" element="span"> <b>Dĺžka kvízu:</b> {{ formattedTime }} </GText>
    </p>

    <GText weight="semibold" color="text-inverted">Ďakujeme za účasť!</GText>
  </GInfoPage>
</template>
