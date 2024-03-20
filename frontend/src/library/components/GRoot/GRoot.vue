<script setup lang="ts">
import { VAppBar, VLayout, VMain, VContainer, VIcon } from 'vuetify/components';
import Logo from '@/library/assets/icons/logo.svg';
import { layout } from '@/library/modules/layout/layout';
import GLoader from '@/library/components/GLoader/GLoader.vue';

const { layoutState } = layout();
</script>

<template>
  <VLayout>
    <VAppBar v-if="layoutState.variant === 'default'" flat>
      <div class="g-navigation-content">
        <slot name="navigation">
          <VIcon :icon="Logo" color="white"></VIcon>
        </slot>
      </div>
    </VAppBar>

    <VMain>
      <VContainer>
        <slot />
      </VContainer>

      <GLoader />
    </VMain>
  </VLayout>
</template>

<style lang="scss">
.g-navigation-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
