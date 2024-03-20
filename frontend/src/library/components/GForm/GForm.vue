<script setup lang="ts">
import { VForm } from 'vuetify/components';
import { computed } from 'vue';
import { gFormRef } from '@/library/modules/gFormRef/gFormRef';

const form = gFormRef();

const exposedData = {
  errors: computed(() => form.value?.errors),
  isDisabled: computed(() => form.value?.isDisabled),
  // form.value?.isValid may be null, transform it to undefined
  isValid: computed(() => form.value?.isValid ?? false),
  isValidating: computed(() => form.value?.isValidating),
  // form.value?.items[0].isValid may be null, transform it to undefined
  items: computed(() =>
    form.value?.items.map((i) => ({
      ...i,
      isValid: i.isValid ?? undefined,
    })),
  ),
  reset: computed(() => form.value?.reset),
  resetValidation: computed(() => form.value?.resetValidation),
  validate: computed(() => form.value?.validate),
};

defineExpose(exposedData);
</script>

<template>
  <VForm ref="form">
    <template #default>
      <slot v-bind="exposedData" />
    </template>
  </VForm>
</template>
