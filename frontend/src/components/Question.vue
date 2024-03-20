<script setup lang="ts">
import GButton from '@/library/components/GButton/GButton.vue';
import GText from '@/library/components/GTypography/GText.vue';
import { computed, ref } from 'vue';
import GProgress from '@/library/components/GProgress/GProgress.vue';
import GList from '@/library/components/GList/GList.vue';
import GTransition from '@/library/components/GTransition/GTransition.vue';

type QuestionProps = {
  modelValue: string | undefined;
  questionNumber: number | string;
  totalQuestions: number | string;
  questionText: string;
  options: { id: string; name: string }[];
  buttonText: string;
  correctValue?: string;
};

const props = defineProps<QuestionProps>();
const emit = defineEmits(['update:modelValue']);

const selectedValue = ref(props.modelValue);

const computedOptions = computed(() => props.options.map((i) => ({ code: i.id, label: i.name })));

const progress = computed(
  () => (Number(props.questionNumber) / Number(props.totalQuestions)) * 100,
);

const complete = () => {
  emit('update:modelValue', selectedValue.value);
};
</script>

<template>
  <GText center size="14" weight="medium" class="mb-1">Otázka #{{ props.questionNumber }}</GText>
  <GProgress :value="progress" class="mb-4" />

  <GText size="16" weight="medium" class="mb-1">
    {{ props.questionText }}
  </GText>

  <GList
    v-model="selectedValue"
    :correct-value="props.correctValue"
    :readonly="!!props.correctValue"
    :options="computedOptions"
    class="mb-3"
  />

  <GTransition>
    <GButton v-show="selectedValue !== undefined && selectedValue !== null" @click="complete">{{
      props.buttonText
    }}</GButton>
  </GTransition>
</template>
