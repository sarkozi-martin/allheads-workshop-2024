<script setup lang="ts">
import { VTextField } from 'vuetify/components';
import { computed } from 'vue';
import { makeRequiredValidator } from '@/library/modules/validators/requiredValidator';

type ValidationRule = (value: any) => string | boolean;

type Props = {
  label?: string;
  required?: boolean;
  modelValue?: string | null;
  rules?: ValidationRule[];
};

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  required: false,
  modelValue: null,
  rules: () => [],
});

const rules = computed(() => {
  const output: ValidationRule[] = [...props.rules];

  if (props.required) {
    output.push(makeRequiredValidator());
  }

  return output;
});
</script>

<template>
  <VTextField
    :label="props.label"
    color="text-inverted"
    flat
    variant="outlined"
    class="g-text-field--inverted"
    :rules="rules"
    :model-value="props.modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<style lang="scss">
@use '@/library/assets/scss/utils';

.g-text-field--inverted {
  color: utils.color('text-inverted');
  margin-bottom: 1rem;

  .v-label.v-field-label {
    opacity: 1;
  }

  .v-field__outline {
    --v-field-border-opacity: 0.8;
  }
}
</style>
