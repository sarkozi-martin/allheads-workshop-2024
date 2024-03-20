<template>
  <!-- eslint-disable-next-line vue/no-v-html vue/no-v-text-v-html-on-component -->
  <HeadingTag v-if="props.html" :class="cssClasses" v-html="props.html" />
  <HeadingTag v-else :class="cssClasses">
    <slot />
  </HeadingTag>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDefaults } from 'vuetify';

import type { GHeadingColor, GHeadingLevel } from './types';

export type GHeadingProps = {
  level: GHeadingLevel;
  html?: string;
  color?: GHeadingColor;
  center?: boolean;
};

const _props = withDefaults(defineProps<GHeadingProps>(), {
  html: undefined,
  color: 'text-primary',
  center: false,
});
const props = useDefaults(_props, 'GHeading');

const HeadingTag: keyof JSX.IntrinsicElements = `h${props.level}`;

const cssClasses = computed(() => {
  const classes = ['g-heading', `g-heading-${props.level}`, `text-${props.color}`];
  if (props.center) {
    classes.push('g-heading--centered');
  }
  return classes;
});
</script>

<style lang="scss" scoped>
@import '@/library/assets/scss/utils';

@mixin createHeading($size, $lineHeight, $weight) {
  font-size: $size;
  line-height: $lineHeight;
  font-weight: $weight;
}

.g-heading {
  color: color(text-primary);

  &--centered {
    text-align: center;
  }

  &-1 {
    @include createHeading(
      gvar(heading-1-size),
      gvar(heading-1-line-height),
      gvar(heading-1-font-weight)
    );
  }

  &-2 {
    @include createHeading(
      gvar(heading-2-size),
      gvar(heading-2-line-height),
      gvar(heading-2-font-weight)
    );
  }

  &-3 {
    @include createHeading(
      gvar(heading-3-size),
      gvar(heading-3-line-height),
      gvar(heading-3-font-weight)
    );
  }

  &-4 {
    @include createHeading(
      gvar(heading-4-size),
      gvar(heading-4-line-height),
      gvar(heading-4-font-weight)
    );
  }
}
</style>
