<script setup lang="ts">
import { VIcon } from 'vuetify/components';
import { layout } from '@/library/modules/layout/layout';
import Logo from '@/library/assets/icons/logo.svg';
import GHeading from '@/library/components/GTypography/GHeading.vue';

type Props = {
  title?: string;
};

const props = defineProps<Props>();

const { setLayoutVariant } = layout();
setLayoutVariant('info');
</script>

<template>
  <div class="py-10">
    <div class="d-flex justify-center mb-5">
      <slot name="icon">
        <VIcon :icon="Logo" size="88" color="text-inverted" />
      </slot>
    </div>

    <GHeading v-if="props.title" color="text-inverted" level="1" center class="mb-8">
      {{ props.title }}
    </GHeading>

    <slot />
  </div>
</template>
