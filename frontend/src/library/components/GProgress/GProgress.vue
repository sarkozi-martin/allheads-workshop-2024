<script setup lang="ts">
import { VProgressLinear } from 'vuetify/components';

export type GProgressProps = {
  value: number;
};

const props = withDefaults(defineProps<GProgressProps>(), {});
</script>

<template>
  <VProgressLinear
    :model-value="props.value"
    rounded
    rounded-bar
    color="state-active"
    class="g-progress"
  />
</template>

<style lang="scss">
.g-progress {
  .v-progress-linear__background,
  .v-progress-linear__determinate {
    outline: 4px solid rgba(var(--v-theme-surface-background), 1);
  }
}
</style>
