<template>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <TextTag v-if="props.html" :class="cssClasses" v-html="props.html" />
  <TextTag v-else :class="cssClasses">
    <slot />
  </TextTag>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDefaults } from 'vuetify';
import { type GTextSize, type GTextWeight } from './types';
import type { GColor } from '@/library/modules/theme/colors';

export type GTextProps = {
  html?: string;
  color?: GColor;
  size?: GTextSize;
  weight?: GTextWeight;
  element?: 'p' | 'span';
  disabled?: boolean;
  center?: boolean;
};

const _props = withDefaults(defineProps<GTextProps>(), {
  html: undefined,
  color: 'text-primary',
  size: '16',
  weight: 'regular',
  element: 'p',
  disabled: false,
  center: false,
});

const props = useDefaults(_props, 'GText');

const TextTag: keyof JSX.IntrinsicElements = props.element;

const cssClasses = computed(() => {
  const color = props.disabled ? 'text-disabled' : props.color;
  const classes = ['g-text', `text-${color}`, `g-text-${props.weight}`];

  classes.push(`g-text-${props.size}`);

  if (props.center) {
    classes.push('g-text--centered');
  }

  return classes;
});
</script>

<style lang="scss" scoped>
@import '@/library/assets/scss/utils';

@mixin createText($size, $lineHeight) {
  font-size: toRem($size);
  line-height: toRem($lineHeight);
}

.g-text {
  white-space: normal;

  &--centered {
    text-align: center;
  }

  &-10 {
    @include createText(10, 12);
  }

  &-12 {
    @include createText(12, 16);
  }

  &-14 {
    @include createText(14, 20);
  }

  &-16 {
    @include createText(16, 22);
  }

  &-18 {
    @include createText(18, 24);
  }

  &-24 {
    @include createText(24, 32);
  }

  &-32 {
    @include createText(32, 40);
  }

  &-48 {
    @include createText(48, 56);
  }

  &-regular {
    font-weight: 400;
  }

  &-medium {
    font-weight: 500;
  }

  &-semibold {
    font-weight: 600;
  }

  &-bold {
    font-weight: 700;
  }

  // deep selectors for tags set via props.html
  &:deep(strong) {
    font-weight: 600; // semi is default

    &.bold {
      font-weight: 700;
    }
  }
}
</style>
