<script setup lang="ts">
import { VSnackbar } from 'vuetify/components';

type GSnackBarProps = {
  visible: boolean;
};

const props = defineProps<GSnackBarProps>();
</script>

<template>
  <VSnackbar variant="flat" :model-value="props.visible" close-on-content-click>
    <template #default>
      <slot />
    </template>
  </VSnackbar>
</template>
