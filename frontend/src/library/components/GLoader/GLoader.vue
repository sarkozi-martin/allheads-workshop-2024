<script setup lang="ts">
import { VProgressCircular } from 'vuetify/components';
import { loader } from '@/library/modules/loader/loader';

const { loaderState } = loader();
</script>

<template>
  <div v-show="loaderState.visible" class="g-loader">
    <div class="g-loader-content">
      <VProgressCircular color="state-active" size="50" indeterminate />
    </div>
  </div>
</template>

<style lang="scss">
@use '@/library/assets/scss/utils';

.g-loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: utils.color('surface-background');
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
